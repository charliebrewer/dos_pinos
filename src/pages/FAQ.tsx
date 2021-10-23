import React, { useState } from 'react';

const FAQ_SECTIONS = {
  WHAT_IS_DOS_PINOS: 'WHAT_IS_DOS_PINOS',
  MAKING_DECISIONS: 'MAKING_DECISIONS',
  PLACES_AND_PEOPLE: 'PLACES_AND_PEOPLE',
  DOLLARS_AND_CENTS: 'DOLLARS_AND_CENTS',
  BEING_A_MEMBER: 'BEING_A_MEMBER',
  LIVING_AT_DOS_PINOS: 'LIVING_AT_DOS_PINOS',
};

export default () => {
  const [currFaq, setCurrFaq] = useState(null);

  const getAnchor = (section, title) => {
    const lowerSection = section.toLowerCase();

    return (
      <a
        href={`#${lowerSection}`}
        name={lowerSection}
        onClick={() =>
          currFaq === section ? setCurrFaq(null) : setCurrFaq(section)
        }
      >
        {title}
      </a>
    );
  };

  return (
    <div>
      <h2>Frequently Asked Questions</h2>

      <h3>
        {getAnchor(
          FAQ_SECTIONS.WHAT_IS_DOS_PINOS,
          'So... What is Dos Pinos and How Does It Work?'
        )}
      </h3>

      {currFaq === FAQ_SECTIONS.WHAT_IS_DOS_PINOS && (
        <ol>
          <li>
            <p>What is a housing cooperative?</p>
            <p>
              <i>
                "A housing co-op is a corporation that exists ... to provide
                housing ... to its members. In a housing cooperative, there is a
                two-tiered ownership structure: At the top is the cooperative
                corporation, and below that, the corporation's owners, typically
                known as member-owners. The cooperative corporation owns ... the
                housing stock, which includes all land, dwelling units and
                common areas. Member-owners purchase stock—sometimes called
                shares or membership certificates—in the cooperative
                corporation. Upon purchasing stock in the cooperative, the
                member-owner signs a perpetual lease, called a proprietary lease
                or occupancy agreement, giving the member-owner a legal and
                exclusive right to occupy a particular dwelling unit, on
                condition that all obligations to the cooperative are met."
              </i>
            </p>
          </li>

          <li>
            <p>Would I own the unit I occupy?</p>
            <p>
              <i>
                No. You own a share in the housing cooperative which gives you
                the right to a lease in perpetuity a specific unit and gives you
                exclusive use of the interior of the unit and courtyard,
                assuming you comply with the Occupancy Agreement and Policies in
                Member Handbook.
              </i>
            </p>
          </li>

          <li>
            <p>What does limited equity mean?</p>
            <p>
              <i>
                Dos Pinos is a limited equity housing cooperative. The price for
                which the Dos Pinos members can sell their share (their equity)
                is limited or restricted.
              </i>
            </p>
          </li>

          <li>
            <p>
              How do housing cooperatives differ from condominiums or privately
              owned houses?
            </p>
            <p>
              <i>
                "Housing co-ops differ from condominiums in that [member]
                residents do not own...their individual dwelling units. Instead,
                the cooperative corporation holds title to the property, and
                [member] residents own share(s) in the cooperative. See
                "Differences Among Co-op, Condo, Rental, and Single Family" in
                this section for a comparison of condominium, cooperative,
                single family and rental housing features and benefits."
              </i>
            </p>
          </li>

          <li>
            <p>Who owns Dos Pinos?</p>
            <p>
              <i>
                The corporation of Dos Pinos Housing Cooperative owns Dos Pinos.
                Each member owns one share of the 60 shares of the corporation;
                each share gives the member a legal and exclusive right to
                occupy a particular dwelling unit, on condition that all
                obligations to the cooperative are met.
              </i>
            </p>
          </li>

          <li>
            <p>Is HUD involved with Dos Pinos?</p>
            <p>
              <i>
                Dos Pinos has a mortgage loan guaranteed by HUD which means we
                must abide by the HUD regulatory agreement.
              </i>
            </p>
          </li>

          <li>
            <p>Is Dos Pinos HUD-subsidized housing?</p>
            <p>
              <i>No, Dos Pinos is not subsidized by HUD or any other source.</i>
            </p>
          </li>

          <li>
            <p>Does Dos Pinos have rental units?</p>
            <p>
              <i>No, Dos Pinos does not have rental units.</i>
            </p>
          </li>

          <li>
            <p>Does Dos Pinos use a management company?</p>
            <p>
              <i>
                Yes, Dos Pinos contracts with a property management company to
                provide specific services for our cooperative, e.g., staffing
                our onsite officer manager and maintenance staff, overseeing
                vendor contracts, keeping our financial records, paying our
                cooperative invoices, providing a monthly financial report, and
                other contracted services.
              </i>
            </p>
          </li>
        </ol>
      )}

      <h3>
        {getAnchor(
          FAQ_SECTIONS.MAKING_DECISIONS,
          'Making Decisions and Governance'
        )}
      </h3>

      {currFaq === FAQ_SECTIONS.MAKING_DECISIONS && (
        <ol>
          <li>
            <p>How is Dos Pinos governed?</p>
            <p>
              <i>
                Dos Pinos follows the representative democracy model of
                governance. Members elect a volunteer seven-member board of
                directors who are tasked with the legal and fiduciary
                responsibilities of the cooperative.
              </i>
            </p>
          </li>

          <li>
            <p>How long is a board term?</p>
            <p>
              <i>
                The usual board term is for three years, staggered so that there
                will be some continuity among board members to ensure
                institutional memory in terms of major decisions affecting the
                cooperative.
              </i>
            </p>
          </li>

          <li>
            <p>Does Dos Pinos ever use the consensus model?</p>
            <p>
              <i>
                The consensus model is not used for making decisions at board
                meetings when conducting Dos Pinos business. Committees may use
                the consensus model if it suits their purposes.
              </i>
            </p>
          </li>
        </ol>
      )}

      <h3>
        {getAnchor(
          FAQ_SECTIONS.PLACES_AND_PEOPLE,
          'Places to Live and the People Who Live There'
        )}
      </h3>

      {currFaq === FAQ_SECTIONS.PLACES_AND_PEOPLE && (
        <ol>
          <li>
            <p>Can I make changes to the unit I occupy?</p>
            <p>
              <i>
                It depends on the kind of change. Any structural alteration or
                permanent improvement must be pre-approved by the Dos Pinos
                Board.
              </i>
            </p>
          </li>

          <li>
            <p>
              How many units are there at Dos Pinos? Are the units all the same?
            </p>
            <p>
              <i>
                There are 60 units at Dos Pinos: 6 one-bedroom units, 28
                two-bedroom units, and 26 three-bedroom units. The floor plans
                for each type of unit are virtually identical in square footage.
                Units are all one story, except for the 3-bedroom units, which
                are two- story.
              </i>
            </p>
          </li>

          <li>
            <p>How many people live at Dos Pinos?</p>
            <p>
              <i>
                Dos Pinos has 60 units comprised of families with children,
                people sharing units, and single people, so there are
                approximately 100 people living here at any given time.
              </i>
            </p>
          </li>

          <li>
            <p>Is Dos Pinos a retirement community?</p>
            <p>
              <i>
                No. Dos Pinos is a multi-generational housing cooperative which
                includes people of all ages.
              </i>
            </p>
          </li>

          <li>
            <p>Do families live at Dos Pinos?</p>
            <p>
              <i>
                Yes. Dos Pinos is a multi-generational housing cooperative that
                includes people of all ages.
              </i>
            </p>
          </li>

          <li>
            <p>What appliances does Dos Pinos provide?</p>
            <p>
              <i>
                Dos Pinos provides the stove, dishwasher, and heating and air
                conditioning for each unit. The member provides the
                refrigerator, and washer and dryer if desired.
              </i>
            </p>
          </li>
        </ol>
      )}

      <h3>{getAnchor(FAQ_SECTIONS.DOLLARS_AND_CENTS, 'Dollars and Cents')}</h3>

      {currFaq === FAQ_SECTIONS.DOLLARS_AND_CENTS && (
        <ol>
          <li>
            <p>What does the member’s monthly assessment cover?</p>
            <p>
              <i>
                Members pay a single monthly assessment to the cooperative,
                which covers ongoing operating expenses, maintenance, mortgage,
                taxes, insurance, and replacement reserves.
              </i>
            </p>
          </li>

          <li>
            <p>When is the monthly assessment due?</p>
            <p>
              <i>
                The monthly assessment is due on the first of the month, and
                accrues a late fee after the 15th of the month.
              </i>
            </p>
          </li>

          <li>
            <p>
              Does the amount of the monthly assessment vary with the number of
              persons living in the unit?
            </p>
            <p>
              <i>
                No, the assessment amount is determined solely on the size of
                the unit.
              </i>
            </p>
          </li>

          <li>
            <p>Do the assessments ever go up?</p>
            <p>
              <i>
                Yes; it depends on the cooperative’s financial needs. The Dos
                Pinos Board makes the decision about assessment increases
                depending on expected cost increases.
              </i>
            </p>
          </li>

          <li>
            <p>What expenses do members pay individually?</p>
            <p>
              <i>
                Gas and electric service, cable TV and internet, if any, and
                telephone.
              </i>
            </p>
          </li>

          <li>
            <p>
              Does the cooperative insurance policy cover injuries or damages
              inside a member’s unit or courtyard?
            </p>
            <p>
              <i>
                No. A personal renter’s policy in not required for membership,
                but is highly recommended.
              </i>
            </p>
          </li>
        </ol>
      )}

      <h3>
        {getAnchor(
          FAQ_SECTIONS.BEING_A_MEMBER,
          'Becoming... and Being a Member of Dos Pinos'
        )}
      </h3>

      {currFaq === FAQ_SECTIONS.BEING_A_MEMBER && (
        <ol>
          <li>
            <p>What are the duties required of membership at Dos Pinos?</p>
            <p>
              <i>
                The basic requirements are to abide by the Dos Pinos governing
                documents, which include the Bylaws, the Membership Agreement,
                the Occupancy Agreement, the Community Rules, and Policies and
                Procedures found in the Member Handbook. Members must pay the
                monthly assessment and contribute 24 hours per year in Dos Pinos
                community service. Participating in community events is also
                encouraged.
              </i>
            </p>
          </li>

          <li>
            <p>Can I move to a different unit?</p>
            <p>
              <i>
                After the first year of membership and residence you may apply
                to be put on the current member waiting list for a different
                unit.
              </i>
            </p>
          </li>

          <li>
            <p>
              How long will I have to wait between my interview and my
              opportunity to purchase a share?
            </p>
            <p>
              <i>
                Historically it can take from a few months to several years.
                There is no way to estimate the time. Flexibility is the key.
              </i>
            </p>
          </li>

          <li>
            <p>What kinds of member service contributions are required?</p>
            <p>
              <i>
                Members agree to 2 hours per month or 24 hours per year of
                community service (per member household) for the benefit of the
                cooperative. A Dos Pinos Member Contribution Coordinator works
                with members to match their interests with needs in the
                community.
              </i>
            </p>
          </li>

          <li>
            <p>
              What happens if a household member or guest violates a policy?
            </p>
            <p>
              <i>
                The member is responsible for the acts of household members and
                guests.
              </i>
            </p>
          </li>
        </ol>
      )}

      <h3>
        {getAnchor(FAQ_SECTIONS.LIVING_AT_DOS_PINOS, 'Living at Dos Pinos')}
      </h3>

      {currFaq === FAQ_SECTIONS.LIVING_AT_DOS_PINOS && (
        <ol>
          <li>
            <p>Can I use the community room for private events?</p>
            <p>
              <i>
                Yes. For a small fee the community room may be used for private
                events.
              </i>
            </p>
          </li>

          <li>
            <p>Are pets allowed at Dos Pinos?</p>
            <p>
              <i>Yes, within certain provision.</i>
            </p>
          </li>

          <li>
            <p>Can I rent out my entire unit or a room in the unit?</p>
            <p>
              <i>
                You may sublease the entire unit for a limited period of time.
                You may rent a room in the unit as long as you also reside in
                the unit.
              </i>
            </p>
          </li>

          <li>
            <p>Can I operate a business in the unit I occupy?</p>
            <p>
              <i>
                Yes, but not if such use will result in clients entering or
                exiting the property.
              </i>
            </p>
          </li>

          <li>
            <p>Can I have overnight guests?</p>
            <p>
              <i>
                Yes, there are no restrictions for short- term guests. For long-
                term guests, see Long-Term Guest Policy.
              </i>
            </p>
          </li>

          <li>
            <p>
              Can I park my RV, boat or trailer in an open space at the
              cooperative?
            </p>
            <p>
              <i>No.</i>
            </p>
          </li>

          <li>
            <p>Do members share community meals?</p>
            <p>
              <i>
                Only occasionally, but not on a regular basis. Potluck meals are
                shared on special occasions, e.g. Thanksgiving, or when a member
                or members organize a shared meal.
              </i>
            </p>
          </li>

          <li>
            <p>What kinds of community activities might I find at Dos Pinos?</p>
            <p>
              <i>
                Book group, special interest groups, Pi Day, Easter egg hunt,
                4th of July barbeque, pumpkin carving, Thanksgiving meal,
                holiday caroling and party, movie nights, forums on topics of
                community interest, landscaping work parties, and other
                activities/events that members initiate.
              </i>
            </p>
          </li>

          <li>
            <p>
              Can my household members come to meetings, participate in
              cooperative joint projects, and come to social events?
            </p>
            <p>
              <i>Yes. Participation is encouraged.</i>
            </p>
          </li>
        </ol>
      )}
    </div>
  );
};
