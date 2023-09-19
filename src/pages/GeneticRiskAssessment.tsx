import React, { useState } from "react";
import "./GeneticRiskAssessment.scss";
import type { RadioChangeEvent } from "antd";
import { Input, Radio, Space } from "antd";

const GeneticRiskAssessment = () => {
  const { TextArea } = Input;
  const [value, setValue] = useState(1);

  const onChange = (e: RadioChangeEvent) => {
    console.log("radio checked", e.target.value);
    setValue(e.target.value);
  };

  return (
    <div className="gra-container">
      {/* page I */}
      <h1>Genetic Risk Assessment</h1>
      <div>
        About the MSK Genetic Risk Assessment The MSK Genetic Risk Assessment
        will help you find out if you may benefit from genetic testing for
        hereditary cancer, based on your personal and family history of cancer.
        The Genetic Risk Assessment is based on a combination of National
        Comprehensive Cancer Network guidelines for certain types of hereditary
        cancer testing and supplemental materials.
      </div>

      <div>
        <strong>
          Each question we ask is important. Do your best to answer each
          question correctly so that the tool can give you the best information
          possible.
        </strong>
      </div>

      <div>
        <strong>
          Any information that you share will be used in accordance with our
          Notice of Privacy Practices.
        </strong>
      </div>

      <div>
        To answer some questions, it will be helpful to have these ready:
        <ul>
          <li>
            Medical, pathology, or surgical report if you’ve ever been diagnosed
            with: breast, colorectal, kidney, ovarian, pancreatic, prostate,
            stomach, thyroid, or uterine (endometrial) cancer
          </li>
          <li>
            Pathology or surgical report from any colonoscopy where you had
            colon polyps
          </li>
          <li>
            Medical, pathology, or surgical report if a blood relative has ever
            been diagnosed with breast, prostate, or stomach cancer
          </li>
          <li>
            Genetic test report if you or a blood relative had previous genetic
            testing If you aren't sure how to answer a question, you can always
            leave and come back later after you had time to check or talk to a
            family member. When you exit the assessment, we will save your
            answers for you automatically. You should click on the Genetic Risk
            Assessment link in the MSK Content Center to come back to your
            unfinished assessment.
          </li>
        </ul>
        When you finish the Genetic Risk Assessment, it will tell you if you may
        benefit from a genetic assessment or testing. You may be told to talk
        with an MSK Care Advisor as the next step.
      </div>

      {/* page II */}
      <h3>Personal history</h3>
      <div>
        Have you or any close relatives (parents, siblings, children) ever been
        diagnosed with cancer? If so, what type(s) of cancer?
      </div>
      <Radio.Group onChange={onChange} value={value}>
        <Space direction="vertical">
          <Radio value={1}>Yes</Radio>
          <Radio value={0}>No</Radio>
        </Space>
      </Radio.Group>

      <div>
        How old were you or your relatives at the time of cancer diagnosis?
      </div>
      <Input placeholder="age" style={{ width: "100px" }}></Input>

      <div>
        Have you personally had cancer, and if so, what type(s) and when were
        you diagnosed?
      </div>
      <Input placeholder="year" style={{ width: "200px" }}></Input>

      <div>
        Have you undergone any cancer treatments, such as surgery, chemotherapy,
        or radiation therapy?
      </div>
      <TextArea
        rows={4}
        style={{ width: "600px" }}
        placeholder="maxLength is 600"
        maxLength={6}
      />
    </div>
  );
};

export default GeneticRiskAssessment;
