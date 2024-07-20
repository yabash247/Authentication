import { Card, CardBody, Col } from "reactstrap";
import CardHeaderCommon from "../../../../CommonElements/CommonCardHeader/CardHeaderCommon";
import { Monthly, ProjectsOverviewHeading, Weekly, Yearly } from "../../../../utils/Constant";
import ReactApexChart from "react-apexcharts";
import { projectsOverviewChartData } from "../../../../Data/Dashboard/DashboardChartData";

const ProjectsOverview = () => {
  return (
    <Col lg="6" xl="4" xxl="5">
      <Card>
        <CardHeaderCommon headClass="pb-0" title={ProjectsOverviewHeading}firstItem={Weekly} secondItem={Monthly} thirdItem={Yearly} />
        <CardBody className="pb-xl-0">
          <ReactApexChart className="project-overview" options={projectsOverviewChartData} series={projectsOverviewChartData.series} height={280} type="line" />
        </CardBody>
      </Card>
    </Col>
  );
};

export default ProjectsOverview;
