import React, { useRef, useState }  from "react"
import "./Report.scss"
import { Button, Col, Input, Modal, Row, Spin, message } from "antd";
import { RightOutlined, DownloadOutlined, SendOutlined, LoadingOutlined } from "@ant-design/icons";
import generatePDF from 'react-to-pdf';

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


const Report = ({ gender }: { gender: string})=> {
  const targetRef = useRef<any>();
  const [isModalOpen, setIsModalOpen] = useState<boolean>()
  const [messageApi, contextHolder] = message.useMessage();
  
  const success = () => {
    messageApi.open({
      type: 'success',
      content: 'Congratulations! You took a step in preventing cancer!',
    });
  };
    
  if (gender === "male") {
    return (
      <div className="layout" ref={targetRef}>
        {contextHolder}
        <Button
          className="button-download"
          title="Download Report"
          onClick={() => generatePDF(targetRef, { filename: 'MSK Prevent Report and Action Plan.pdf' })}><DownloadOutlined />
        </Button>
        <div className="high-risk">You are at high risk for</div>
        <Row gutter={[16, 24]}>
          <Col className="gutter-row risk" span={20}>
            <h2>Skin cancer</h2>
            <div>Skin cancer is a type of cancer that develops in the skin cells. It is caused by damage to the DNA in the skin cells, often caused by exposure to ultraviolet (UV) radiation from the sun or tanning beds.</div>

            <h3>Screening</h3>
            <div>We recommend you get screened for skin cancer with your own provider.</div>

            <h3>Already screened?</h3>
            <div>If you’ve already screened and your results indicate that you need treatment you can schedule an appointment with MSK for treatment.</div>

            <Button
              className="button-container"
              icon={<RightOutlined />}
              onClick={() => { window.open("https://www.mskcc.org/appointments/request-appointment?appointment_type=new", "_blank"); }}
            >Schedule an appointment</Button>

            <h3>Resources</h3>
            <div className="resource" onClick={() => { window.open("https://www.mskcc.org/cancer-care/types/skin/screening-guidelines-skin", "_blank"); }}>What You Should Know About Skin Cancer Screening</div>
            <div className="resource" onClick={() => { window.open("https://www.mskcc.org/cancer-care/patient-education/preventing-skin-cancer", "_blank"); }}>What You Can Do To Prevent Skin Cancer</div>
          </Col>
        </Row>

        <Row gutter={[16, 24]}>
          <Col className="gutter-row risk" span={20}>
            <h2>Lung cancer</h2>
            <div>Lung cancer is a type of cancer that starts in the lungs, caused by uncontrolled growth of abnormal cells. Smoking is the leading cause of lung cancer, followed by exposure to secondhand smoke, radon gas, and other carcinogens.</div>
          
            <h3>Screening</h3>
            <div>We recommend you getting screened at MSK</div>
            <Button
              type="primary"
              className="button-container"
              icon={<RightOutlined />}
              onClick={() => { window.open("https://appointments.mskcc.org/lung-screening", "_blank"); }}
            >Schedule a screening </Button>

            <h3>Resources</h3>
            <div className="resource" onClick={() => { window.open("https://www.mskcc.org/experience/patient-support/tobacco-treatment", "_blank"); }}>MSK's Tobacco Treatment Program</div>
            <div className="resource" onClick={() => { window.open("https://www.mskcc.org/cancer-care/types/lung/risk-factors-prevention", "_blank"); }}>Lung Cancer Prevention & Risk Factors</div>
          </Col>
        </Row>

        <div className="avg-risk">You are at average risk for</div>

        <Row gutter={[16, 24]}>
          <Col className="gutter-row risk" span={20}>
            <h2>Colon cancer</h2>
          
            <div>It is recommended that after 45 everyone at average risk for developing colorectal cancer should undergo regular screening for Colon Cancers.</div>

            <h3>Screening</h3>
            <div>We recommend you get screened for colon cancer with your own provider.</div>

            <h3>Already screened?</h3>
            <div>If you’ve already screened and your results indicate that you need treatment you can schedule an appointment with MSK for treatment.</div>

            <Button
              className="button-container"
              icon={<RightOutlined />}
              onClick={() => { window.open("https://www.mskcc.org/appointments/request-appointment?appointment_type=new", "_blank"); }}
            >Schedule an appointment</Button>

            <h3>Resources</h3>
            <div className="resource" onClick={() => { window.open("https://www.mskcc.org/cancer-care/types/colon/guidelines", "_blank"); }}>Colon Cancer Screening Guidelines</div>
            <div className="resource" onClick={() => { window.open("https://www.mskcc.org/experience/become-patient/becoming-patient", "_blank"); }}>Becoming a Patient</div>
          </Col>
        </Row>

        <Row gutter={[16, 24]}>
          <Col className="gutter-row recommend" span={20}>Recommend MSK Prevent to others
            <Button
              className="button-invite"
              icon={<SendOutlined />}
              onClick={() => setIsModalOpen(true)}
            >Invite </Button>
            <Modal title="Invite your friend to MSK Predict"
              open={isModalOpen}
              onOk={() => {
                setIsModalOpen(false)
                success()
              }}
              onCancel={() => setIsModalOpen(false)}>
              <Input placeholder="Enter email" />
            </Modal>
          </Col>
        </Row>
      </div>
    )
  } else {
    return (
      <div className="layout" ref={targetRef}>
        {contextHolder}
        <Button
          className="button-download"
          title="Download Report"
          onClick={() => generatePDF(targetRef, { filename: 'MSK Prevent Report and Action Plan.pdf' })}><DownloadOutlined />
        </Button>
        <h2>You are not at risk for any cancer</h2>
        <Row gutter={[16, 24]}>
          <Col className="gutter-row recommend" span={20}>
            <h2>General resources</h2>
            <div>You can take steps to prevent cancer even if you are not at a particularly high risk.</div>

            <div className="resource" onClick={() => { window.open("https://www.mskcc.org/cancer-care/patient-education/your-guide-preventing-breast-cancer", "_blank"); }}>What You Can Do to Prevent Breast Cancer</div>
            <div className="resource" onClick={() => { window.open("https://www.mskcc.org/cancer-care/patient-education/your-guide-preventing-gynecologic", "_blank"); }}>What You Can Do To Prevent Gynecologic Cancer</div>
            <div className="resource" onClick={() => { window.open("https://www.mskcc.org/cancer-care/risk-assessment-screening/screening", "_blank"); }}>MSK Screening Services</div>
          </Col>
        </Row>

        <Row gutter={[16, 24]}>
          <Col className="gutter-row recommend" span={20}>Recommend MSK Prevent to others
            <Button
              className="button-invite"
              icon={<SendOutlined />}
              onClick={() => setIsModalOpen(true)}
            >Invite </Button>
            <Modal title="Invite your friend to MSK Predict"
              open={isModalOpen}
              onOk={() => {
                setIsModalOpen(false)
                success()
              }}
              onCancel={() => setIsModalOpen(false)}>
              <Input placeholder="Enter email" />
            </Modal>
          </Col>
        </Row>
      </div>
    )
  }
};

export default Report;

function sleep(arg0: number) {
  throw new Error("Function not implemented.");
}
