import React from "react";
import Background from "../Background";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const TitleContainer = styled.div`
  text-align: center;
  display: flex;
  justify-content: center;
  align-self: center;
  border-bottom: solid black 5px;
  width: fit-content;
  margin-bottom: 10px;
`;
const QuestionContainer = styled.div`
  text-align: center;
  display: flex;
  justify-content: start;
  align-items: center;
  flex-direction: column;
  height: 400px;
  overflow: auto;
  padding: 0 150px 0 150px;
`;

function index() {
  return (
    <Background>
      <Wrapper>
        <TitleContainer>
          <h1 style={{ margin: "0" }}>Frequently Asked Questions</h1>
        </TitleContainer>
        <QuestionContainer>
          <div>
            <h3>What's the location of your repair shop?</h3>
            <p>Our repair shop is located at Purok 1, Lumil, Silang, Cavite.</p>
          </div>
          <div>
            <h3>
              Am I allowed to use any carrier to send in my tool for repair?
            </h3>
            <p>
              Yes, you can use any carrier to send in your tool for repair, but
              please note that we do not accept Cash on Delivery (COD)
              shipments. Kindly settle the shipping fees in advance. Please send
              your tool to our repair center located at Purok 1, Lumil, Silang,
              Cavite. Thank you for choosing our repair tracking service!
            </p>
          </div>
          <div>
            <h3>
              Can you arrange for my repaired tool to be shipped to me instead
              of me picking it up?
            </h3>
            <p>
              Yes, we can arrange for your repaired tool to be shipped to your
              preferred address instead of you picking it up. Please note that
              if you choose shipping through LBC Express, there will be an
              additional fee. The cost depends on factors like package size,
              weight, and destination. We will provide you with all the
              necessary information on shipping fees and options to help you
              make an informed decision. Simply inform our customer service team
              of your preference, and they will assist you in coordinating the
              shipment of your repaired tool to your specified address. Thank
              you for choosing our repair tracking service!
            </p>
          </div>
          <div>
            <h3>What type of tools do you repair?</h3>
            <p>
              Certainly! We repair all kinds of power tools. Our expert
              technicians specialize in handling repairs for various types of
              power tools, including drills, saws, sanders, grinders, and more.
              You can bring your power tool to our repair center, or you can
              contact our customer service team for further assistance. We are
              fully equipped to restore your power tools to optimal
              functionality. Thank you for considering our repair tracking
              service for your power tool needs!
            </p>
          </div>
          <div>
            <h3>How long does the repair process usually take?</h3>
            <p>
              The repair process typically takes 2-5 days to complete. However,
              please be aware that the actual duration may vary depending on the
              specific issue with your tool and the availability of replacement
              parts. We strive to provide a quick turnaround time, but
              unexpected factors may extend the duration. Our skilled
              technicians are committed to expediting the repair process without
              compromising quality. We will keep you informed about the progress
              of your repair and notify you promptly when your tool is ready for
              pickup or shipment. Thank you for your patience and confidence in
              our repair tracking service.
            </p>
          </div>
          <div>
            <h3>What payment methods do you accept for repair services?</h3>
            <p>
              We offer convenient payment options for our repair services. You
              can pay in cash at our repair center. We also accept payment
              through GCash, an electronic payment service in the Philippines.
              To use GCash, please ensure you have a GCash account set up and
              ready for the transaction. You can send the payment to the GCash
              number 09451351291. Kindly include your reference number or
              invoice details when making the payment for easy identification.
              Our customer service team is available to provide you with payment
              information and assist you with any inquiries. Thank you for
              choosing our repair tracking service, and we look forward to
              providing you with top-quality repair services for your tools.
            </p>
          </div>
          <div>
            <h3>Do you offer a warranty for repaired tools?</h3>
            <p>
              Unfortunately, we do not offer a warranty for repaired tools at
              this time. Our focus is on delivering high-quality repair services
              and restoring your tools to optimal functionality. However, due to
              the complexities of repairs and various factors affecting
              long-term performance, we are unable to provide a warranty for the
              repairs. We recommend thoroughly testing your repaired tool upon
              receipt to ensure it meets your expectations and functions
              correctly. If you have any concerns or encounter issues, please
              contact our customer service team. We will do our best to address
              your concerns and provide assistance. We appreciate your
              understanding and value your trust in our repair services.
            </p>
          </div>
          <div>
            <h3>Can I get an estimate for the repair cost?</h3>
            <p>
              Certainly! We can provide you with an estimate for the repair
              cost. However, please note that the accuracy of the estimate may
              vary depending on the specific issue with your tool. For a more
              precise estimate, we recommend bringing your tool to our repair
              center. Our technicians will assess the problem firsthand and
              provide you with a detailed and accurate cost estimate based on
              the required repairs, parts, and labor involved. Our goal is to
              provide transparent information to help you make informed
              decisions about your tool's repair. Thank you for considering our
              repair tracking service, and we look forward to assisting you with
              your tool repair needs.
            </p>
          </div>
          <div>
            <h3>How can I track the progress?</h3>
            <p>
              To track the progress of your repair, you can visit our website
              and utilize our repair progress tracker feature. It provides
              real-time updates on the status of your repair. Additionally, you
              can reach out to our customer support team through the provided
              contacts for further assistance and inquiries.
            </p>
          </div>
          <div>
            <h3>
              How can I provide feedback or review the repair service I
              received?
            </h3>
            <p>
              To provide feedback or review the repair service you received, we
              encourage you to visit our Facebook page at {" "}
              <a href="https://www.facebook.com/cptrewindsPH" target="_blank">
                https://www.facebook.com/cptrewindsPH
              </a>
              . You can leave your valuable feedback and share your experience
              with our repair service. We appreciate your feedback as it helps
              us improve our services and serve you better in the future. Thank
              you for considering leaving a review on our Facebook page.
            </p>
          </div>
        </QuestionContainer>
      </Wrapper>
    </Background>
  );
}

export default index;
