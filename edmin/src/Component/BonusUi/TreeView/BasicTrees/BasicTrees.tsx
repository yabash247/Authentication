import React from 'react'
import { Card, CardBody } from 'reactstrap';
import { BasicTree } from '../../../../utils/Constant';
import TreeView, { flattenTree } from 'react-accessible-treeview';
import { FaCheckSquare, FaMinusSquare, FaSquare } from "react-icons/fa";
import { IoMdArrowDropright } from "react-icons/io";
import cx from "classnames";
import { basicTreeData, treeViewList } from '../../../../Data/BonusUi/TreeView/TreeView';
import CardHeaderCommon from '../../../Ui-Kits/CardHeaderCommon';
import { BasicTreesProp } from '../../../../Type/BonusUi/TreeView';

export const ArrowIcon:React.FC<BasicTreesProp> = ({ isOpen, className }) => {
    const baseClass = "arrow";
    const classes = cx(baseClass, { [`${baseClass}--closed`]: !isOpen }, { [`${baseClass}--open`]: isOpen }, className);
    return <IoMdArrowDropright className={classes} />;
  };
  
  export const CheckBoxIcon = ({ variant, ...rest }: BasicTreesProp) => {
    switch (variant) {
      case "all": return <FaCheckSquare color="#4AAD8A" {...rest} />; 
      case "none": return <FaSquare color="white" {...rest} style={{ border: "1px solid #80808069" }} />;
      case "some": return <FaMinusSquare {...rest} color="var(--theme-default)" />; 
      default: return null;
    }
  };

const BasicTrees = () => {
  const treeData = flattenTree(treeViewList);
  return (
    <Card>
      <CardHeaderCommon title={BasicTree} span={basicTreeData} headClass="pb-0" />
      <CardBody>
        <div className="tree-container">
          <div className="checkbox">
            <TreeView data={treeData} aria-label="Checkbox tree" multiSelect propagateSelect propagateSelectUpwards togglableSelect defaultSelectedIds={[4,9]} expandedIds={[1,2,6,10,14,27]} nodeRenderer={({ element, isBranch, isExpanded, isSelected, isHalfSelected, getNodeProps, level, handleSelect, handleExpand }) => {
              return (
                <div {...getNodeProps({ onClick: handleExpand })} style={{ marginLeft: 40 * (level - 1),marginTop:5 }} className="d-flex align-items-center">
                  {isBranch && <ArrowIcon isOpen={isExpanded} />}
                  <CheckBoxIcon className="checkbox-icon " onClick={(e: any) => { handleSelect(e); e.stopPropagation(); }} variant={isHalfSelected ? "some" : isSelected ? "all" : "none"} /><span className="name">{element.name}</span></div>
                );
              }}
            />
          </div>
        </div>
      </CardBody>
    </Card>
  )
}

export default BasicTrees