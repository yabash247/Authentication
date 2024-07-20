import React, { useState, useEffect } from 'react';
import useAxios from "../../utils/useAxios"

import Dropdown from 'react-bootstrap/Dropdown';
import Table from 'react-bootstrap/Table';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

function CatfishFarming() {

  const [myProjects, setmyProjects] = useState("")
  const [title, setTitle] = useState("")
  const [loading, setLoading] = useState(true);
  const api = useAxios();



  useEffect(() => {
    const fetchNotifications = async () => {
      try {
        const response = await api.get('intutiveSpec/myProjects/')
        setmyProjects(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching notifications:', error);
        setLoading(false);
      }
    };

    fetchNotifications();
  }, []);

  const handleClick = (title, e) => {
    console.log(e.target);
    console.log(title);
    setTitle(title)
  }



  return (
    <div>

      <>
        <main role="madin" style={{ marginTop: 50 }}>
          {/* Main jumbotron for a primary marketing message or call to action */}
          <div className="jumbotron">
            <div className="container">
              <h1 className="display-3">CATFISH FARMING</h1>
              <Dropdown>
                <Dropdown.Toggle variant="success" className="btn btn-primary btn-lg" id="dropdown-basic" >
                  My Projects
                </Dropdown.Toggle>
                {myProjects.length > 0 ? (
                  <Dropdown.Menu>
                    {myProjects.map(myProjects => (
                      <Dropdown.Item
                        key={myProjects.owner}
                        onClick={(e) => handleClick(myProjects.title, e)}>
                        {myProjects.title} / {myProjects.summary}
                      </Dropdown.Item>
                    ))}
                    <Dropdown.Item href="#/action-1">create Project </Dropdown.Item>
                  </Dropdown.Menu>
                ) : (
                  <p>No notifications available</p>
                )}
              </Dropdown>

            </div>
          </div>
          <div className="container">
          <Table responsive striped bordered hover>
      <thead>
        <tr>
          <th>Title</th>
          <th>Activities</th>
          <th>To Do List</th>
          <th>notifications</th>
        </tr>
      </thead>
      {myProjects.length > 0 ? (
      <tbody>
        {myProjects.map(myProjects => (
        <tr
          key={myProjects.owner}
        >
          <td><Link to={`${window.location.pathname}/project/${myProjects.id}`} >{myProjects.title}</Link></td>
          
          <td>{myProjects.summary}</td>
          <td>{myProjects.id}</td>
          <td>{window.location.href}</td>
        </tr>
        ))}
        <tr>
          <td>2</td>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr>
          <td>3</td>
          <td colSpan={2}>Larry the Bird</td>
          <td>@twitter</td>
        </tr>
      </tbody>
) : (
  <p>No notifications available</p>
)}
    </Table>
            {/* Example row of columns */}
            <div className="row">
              <div className="col-md-4">
                <h2>{title}</h2>
                <p>
                  Donec id elit non mi porta gravida at eget metus. Fusce dapibus,
                  tellus ac cursus commodo, tortor mauris condimentum nibh, ut
                  fermentum massa justo sit amet risus. Etiam porta sem malesuada
                  magna mollis euismod. Donec sed odio dui.{" "}
                </p>
                <p>
                  <a className="btn btn-secondary" href="#" role="button" >
                    View details »
                  </a>
                </p>
              </div>
              <div className="col-md-4">
                <h2>Heading</h2>
                <p>
                  Donec id elit non mi porta gravida at eget metus. Fusce dapibus,
                  tellus ac cursus commodo, tortor mauris condimentum nibh, ut
                  fermentum massa justo sit amet risus. Etiam porta sem malesuada
                  magna mollis euismod. Donec sed odio dui.{" "}
                </p>
                <p>
                  <a className="btn btn-secondary" href="#" role="button">
                    View details »
                  </a>
                </p>
              </div>
              <div className="col-md-4">
                <h2>Heading</h2>
                <p>
                  Donec sed odio dui. Cras justo odio, dapibus ac facilisis in,
                  egestas eget quam. Vestibulum id ligula porta felis euismod semper.
                  Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum
                  nibh, ut fermentum massa justo sit amet risus.
                </p>
                <p>
                  <a className="btn btn-secondary" href="#" role="button">
                    View details »
                  </a>
                </p>
              </div>
            </div>
            <hr />
          </div>{" "}
          {/* /container */}
        </main>
        <footer className="container">
          <p>© Company 2017-2018</p>
        </footer>
      </>

    </div>
  )
}

export default CatfishFarming
