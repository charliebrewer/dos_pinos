import React from 'react';
import applicationPacket from '../assets/Application_Packet_March_2021.pdf';

export default () => {
  return (
    <div>
      <h2>Application Process</h2>

      <p>
        <b>
          <span style={{ color: 'red' }}>Important Note</span>: Due to long
          waiting lists, there is an indefinite moratorium on accepting new
          applications for membership in the Dos Pinos Housing Cooperative. The
          Dos Pinos Board of Directors will reassess waiting lists periodically
          and post any updates on this website. For informational purposes the
          application process is described below.
        </b>
      </p>

      <p>
        <b>Membership Application</b>
      </p>

      <p>
        To start the{' '}
        <a href={applicationPacket} target="_blank">
          application
        </a>{' '}
        process, you must complete a membership application and submit the
        required documentation and an application fee ($50 for one shareholder,
        or $80 for two). When the administrative staff determines that your
        application is complete, you will be given a packet of basic information
        about Dos Pinos.
      </p>

      <p>
        <b>Interview</b>
      </p>

      <p>
        After your application is received, a current member will contact you to
        schedule an interview with three current members, including a board
        member. All of those household members who will reside in the unit
        should attend. You may have questions for us regarding your
        understanding and expectations about living in a cooperative
        environment. Bring your questions to the interview.
      </p>

      <p>
        <b>Decision on Your Application</b>
      </p>

      <p>
        After the interview and a credit check, your application will go to the
        7-member Board for confidential review and a decision. You will be
        notified in writing of the decision.
      </p>

      <p>
        <b>Waiting List</b>
      </p>

      <p>
        If accepted, your name will be put on the waiting list based on the date
        at which your application was submitted to the office manager. The
        amount of time that an accepted applicant spends on the waiting list
        before a unit is available varies depending on a variety of factors.
      </p>

      <p>
        <b>Purchasing a Share</b>
      </p>

      <p>
        When your name rises to the top of the waiting list and a unit becomes
        available, a seller will contact you. You will see the unit and decide
        if you would like to submit a “Proposal of Share Transfer” with a $500
        deposit to secure your right to buy a share. That share will entitle you
        to residence in the seller’s unit. This is your official request to buy
        the share and become a Dos Pinos member. If a year or more has passed
        since you applied, your financial situation will be reviewed again
        through updated documentation and another credit check. Your request
        will again go to the Board for a decision as to purchase of the share
        and membership.
      </p>

      <p>
        <b>Membership and Occupancy Agreements</b>
      </p>

      <p>
        After you have purchased the share and before you take occupancy, you
        will be asked to read and sign a variety of documents and to pay the
        balance of your membership fee (the share). Samples of the Membership
        Agreement and Occupancy Agreement are included here and are also
        contained in the Members’ Handbook. You will receive a binder for your
        unit that contains a hard copy of the Members’ Handbook and other
        materials.
      </p>

      <p>
        <b>New Member Orientation</b>
      </p>

      <p>
        After you move in, a current member will contact you to welcome you to
        Dos Pinos, answer any further questions you may have and help you
        determine how you would like to contribute to your new community.
      </p>
    </div>
  );
};
