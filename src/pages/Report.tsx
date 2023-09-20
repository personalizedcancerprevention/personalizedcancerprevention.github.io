import React from "react"
import "./Report.scss"
import { Button, Card, Col, Row } from "antd";
import {  RightOutlined } from "@ant-design/icons";
/*  User 1 – Male at birth /  50  
// physical https://www.mskcc.org/cancer-care/patient-education/physical-activity
// family  https://www.mskcc.org/cancer-care/patient-education/family-health-history
// diet https://www.mskcc.org/cancer-care/patient-education/tips-healthy-eating
// smoking https://www.mskcc.org/cancer-care/patient-education/video/quitting-smoking-msk-tobacco-treatment
// lung screening https://www.mskcc.org/cancer-care/risk-assessment-screening/screening/lung
// skin cancer https://www.mskcc.org/cancer-care/types/skin/screening-guidelines-skin
  Smoker
  Never been diagnosed with Cancer
  Resides primarily in Florida
  Does not use sunscreen
  family has cancer
  OVERWEIGHT
 */

  /* User 2 - Female at birth / 25
  Non-smoker
  social drink
  No HPV
  Use Sunscreen
  NW (Oregon)
  No Cancer
  Fit cross
  // breast cancer prevention https://www.mskcc.org/cancer-care/patient-education/your-guide-preventing-breast-cancer
  // gynecology cancer prevention https://www.mskcc.org/cancer-care/patient-education/your-guide-preventing-gynecologic
  // general cancer screening guidelines https://www.mskcc.org/cancer-care/risk-assessment-screening/screening
  // invite a friend (email)
  */


const Report = () => {

  return (
    <div className="layout">
      <div className="h4">You are at high risk for</div>
       <Row gutter={[16, 24]}>
        <Col className="gutter-row risk" span={16}>
          <h2>Skin cancer</h2>
          <div>Skin cancer is a type of cancer that develops in the skin cells. It is caused by damage to the DNA in the skin cells, often caused by exposure to ultraviolet (UV) radiation from the sun or tanning beds.</div>

          <h3>Screening</h3>
          <div>We recommend you getting screened at MSK</div>
          <Button
          type="primary"
            className="button-container"
            icon={<RightOutlined />}
            onClick={() => { window.open("https://www.mskcc.org/appointments/request-appointment?appointment_type=new", "_blank"); }}
        >Schedule a screening </Button>

          <h3>Resources</h3>
          <div className="resource" onClick= {() => {window.open("https://www.mskcc.org/cancer-care/types/skin/screening-guidelines-skin", "_blank");}}>What You Should Know About Skin Cancer Screening</div>
          <div className="resource" onClick= {() => {window.open("https://www.mskcc.org/cancer-care/patient-education/preventing-skin-cancer", "_blank");}}>What You Can Do To Prevent Skin Cancer</div>
        </Col>
      </Row>

      <Row gutter={[16, 24]}>
        <Col className="gutter-row risk" span={16}>
          <h2>Lung cancer</h2>
          <div>Lung cancer is a type of cancer that starts in the lungs, caused by uncontrolled growth of abnormal cells. Smoking is the leading cause of lung cancer, followed by exposure to secondhand smoke, radon gas, and other carcinogens.</div>
          
          <h3>Screening</h3>
          <div>We recommend you getting screened at MSK</div>
          <Button
          type="primary"
            className="button-container"
            icon={<RightOutlined />}
            onClick={() => { window.open("https://www.mskcc.org/appointments/request-appointment?appointment_type=new", "_blank"); }}
        >Schedule a screening </Button>

          <h3>Resources</h3>
          <div className="resource" onClick= {() => {window.open("https://www.mskcc.org/experience/patient-support/tobacco-treatment", "_blank");}}>MSK's Tobacco Treatment Program</div>
          <div className="resource" onClick= {() => {window.open("https://www.mskcc.org/cancer-care/types/lung/risk-factors-prevention", "_blank");}}>Lung Cancer Prevention & Risk Factors</div>
        </Col>
      </Row>
    </div>
  )
};

export default Report;