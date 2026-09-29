export interface FAQItem {
  question: string;
  answer: string;
}

export type FAQCategory =
  | 'home'
  | 'about'
  | 'loans'
  | 'homeLoan'
  | 'carLoan'
  | 'personalLoan'
  | 'businessLoan'
  | 'twoWheelerInsurance'
  | 'emiCalculator'
  | 'vehicles'
  | 'vehicleDetail'
  | 'carResale'
  | 'sellVehicle'
  | 'contact'
  | 'blog'
  | 'blogDetail'
  | 'goldResale'
  | 'privacyPolicy'
  | 'termsConditions'
  | 'disclaimer';

export const FAQ_DATA: Record<FAQCategory, {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  items: FAQItem[];
}> = {
  home: {
    title: 'Frequently Asked Questions',
    subtitle: 'Common questions about finance, vehicles, insurance and the process of working with SM Associate.',
    items: [
      { question: 'What services does SM Associate provide?', answer: 'We help customers explore loan options, vehicle resale, two wheeler insurance and related finance enquiries. The right service depends on your requirement and eligibility.' },
      { question: 'Can I speak with someone before I apply?', answer: 'Yes. Contact the team first, explain what you need and ask what information or documents may be useful before you submit an application.' },
      { question: 'What documents might I need for a loan?', answer: 'Depending on the lender and loan type, you may be asked for identity proof, address proof, income information, bank statements and other supporting documents.' },
      { question: 'Can I use the EMI calculator before applying?', answer: 'Yes. Try different loan amounts, rates and repayment periods to understand the estimated monthly payment before you decide how much to borrow.' },
      { question: 'Do loan rates and eligibility stay the same for everyone?', answer: 'No. Rates, eligibility, tenure, fees and approval decisions can vary by lender, applicant profile, loan type and other factors.' },
      { question: 'Do you also help with used vehicles?', answer: 'Yes. You can browse available vehicles or start a resale enquiry and get guidance on the information you should check before buying or selling.' },
    ],
  },

  about: {
    title: 'Frequently Asked Questions',
    subtitle: 'A little more about SM Associate and how our local team works with customers.',
    items: [
      { question: 'Where is SM Associate based?', answer: 'SM Associate is based in Tirunelveli, Tamil Nadu. Office and contact details are available on the Contact page.' },
      { question: 'How do you approach finance enquiries?', answer: 'We start by understanding the purpose of the finance, the amount involved and the information available, then explain the practical next steps.' },
      { question: 'Can I visit the office?', answer: 'Yes. Contact the team to confirm the office details and a suitable time before visiting.' },
      { question: 'Can you guarantee loan approval or a specific rate?', answer: 'No. Approval, rate, tenure and fees are decided by the relevant lender after reviewing the application and documents.' },
      { question: 'Do you help with vehicle resale as well as finance?', answer: 'Yes. SM Associate works across finance and mobility services, including pre-owned vehicle enquiries and resale support.' },
      { question: 'How do I start an enquiry?', answer: 'Use the enquiry form or contact the team directly. Tell us what you are planning and we will explain the information needed for the next step.' },
    ],
  },

  loans: {
    title: 'Frequently Asked Questions',
    subtitle: 'Understand the basics before comparing home, car and personal finance options.',
    items: [
      { question: 'Which types of loans can I explore?', answer: 'The site covers home loans, car loans, personal loans and business finance. Availability depends on your requirement and applicant profile.' },
      { question: 'What should I compare before choosing a loan?', answer: 'Compare the interest rate, total repayment cost, tenure, processing charges, prepayment terms, required documents and the monthly EMI.' },
      { question: 'Can I apply with an existing EMI?', answer: 'An existing EMI does not automatically rule out a new loan. Lenders consider income, current obligations, credit history and repayment capacity.' },
      { question: 'Is a co-applicant always required?', answer: 'Not always. It depends on the loan type, lender policy and the financial profile of the applicants.' },
      { question: 'How long does approval take?', answer: 'There is no single timeline for every application. Document checks, property evaluation and lender processes can affect the time required.' },
      { question: 'What happens after I submit my details?', answer: 'Your requirement and supporting details are reviewed, and the relevant lender confirms the available terms before you proceed.' },
    ],
  },

  homeLoan: {
    title: 'Frequently Asked Questions',
    subtitle: 'Useful points to consider when planning a home purchase, construction or renovation.',
    items: [
      { question: 'What can a home loan be used for?', answer: 'Depending on the product, home finance may support a property purchase, construction or eligible renovation. Confirm the permitted use with the lender.' },
      { question: 'What documents are commonly requested?', answer: 'You may be asked for identity and address proof, income documents, bank statements and property-related papers. The exact list varies.' },
      { question: 'Can self-employed applicants apply?', answer: 'Yes. Lenders may review income records, tax filings, business information and banking history before making a decision.' },
      { question: 'How should I choose the repayment period?', answer: 'A longer tenure can reduce the monthly EMI but may increase the total interest paid. Compare the monthly payment with the overall cost.' },
      { question: 'Can I transfer an existing home loan?', answer: 'Some lenders offer balance-transfer options. Compare the new rate, charges, remaining tenure and total saving before moving.' },
      { question: 'Are property checks part of the process?', answer: 'For secured home finance, lenders generally review property and legal documents as part of their approval process.' },
    ],
  },

  personalLoan: {
    title: 'Frequently Asked Questions',
    subtitle: 'Practical questions about using personal finance for planned or unexpected expenses.',
    items: [
      { question: 'Is a personal loan secured or unsecured?', answer: 'Personal loans are generally unsecured, so they are not normally backed by a specific property or vehicle. The lender still reviews income and repayment capacity.' },
      { question: 'What can I use a personal loan for?', answer: 'Use cases depend on the lender, but personal finance is commonly considered for education, medical expenses, home improvements or other planned spending.' },
      { question: 'What affects personal loan eligibility?', answer: 'Income, employment or business stability, existing obligations, credit history and the requested loan amount can all affect eligibility.' },
      { question: 'Can self-employed people apply?', answer: 'Yes. Self-employed applicants can explore suitable products, with business and income records reviewed by the lender.' },
      { question: 'How do I keep the EMI manageable?', answer: 'Start with the amount you actually need, compare different tenures and check the estimated EMI against your existing monthly commitments.' },
      { question: 'Are there processing or prepayment charges?', answer: 'Charges vary by lender and product. Review the official fee schedule and sanction terms before accepting the loan.' },
    ],
  },

  carLoan: {
    title: 'Frequently Asked Questions',
    subtitle: 'What to know when arranging finance for a new or pre-owned car.',
    items: [
      { question: 'Can I finance a pre-owned car?', answer: 'Yes, eligible pre-owned vehicles can be financed. The lender may consider the vehicle age, value, condition and documentation.' },
      { question: 'What documents should I keep ready?', answer: 'Applicants may need identity, address and income documents. Used-vehicle finance can also require registration, insurance and ownership papers.' },
      { question: 'Does the down payment affect the EMI?', answer: 'Yes. A higher down payment reduces the amount you need to finance, which can lower the estimated EMI.' },
      { question: 'Can I calculate the EMI before choosing a car?', answer: 'Yes. Use the EMI calculator to test different loan amounts and tenures and compare the result with your budget.' },
      { question: 'Can a loan be arranged for a private-seller vehicle?', answer: 'Some lenders may finance eligible private-party purchases. Vehicle documents and lender policy need to be checked first.' },
      { question: 'What should I check before buying a used car?', answer: 'Review registration, ownership history, insurance, service records, accident history and mechanical condition before making a decision.' },
    ],
  },

  twoWheelerInsurance: {
    title: 'Frequently Asked Questions',
    subtitle: 'Simple guidance for choosing or renewing two wheeler insurance.',
    items: [
      { question: 'What is the difference between third-party and comprehensive cover?', answer: 'Third-party cover addresses eligible third-party liabilities. Comprehensive policies can also cover damage to your own vehicle, subject to policy terms and exclusions.' },
      { question: 'What should I check before renewing?', answer: 'Review policy dates, coverage, insured value, add-ons, exclusions and the details of the vehicle and owner.' },
      { question: 'Can I compare different insurance options?', answer: 'Yes. Compare coverage, exclusions, add-ons, deductibles and premium rather than looking at price alone.' },
      { question: 'What documents are usually needed?', answer: 'The registration certificate, previous policy details and basic owner or vehicle information may be requested.' },
      { question: 'Does a lower premium always mean a better policy?', answer: 'Not necessarily. A lower premium may come with different coverage or exclusions, so read the policy terms carefully.' },
      { question: 'Can SM Associate help with renewal enquiries?', answer: 'Yes. Share your existing policy and vehicle details and the team can explain what information you should compare.' },
    ],
  },

  emiCalculator: {
    title: 'Frequently Asked Questions',
    subtitle: 'Understand interest amortization, loan tenures, and how prepayments save you money.',
    items: [
      {
        question: 'What formula is used to calculate loan EMI?',
        answer: 'EMI is calculated using: E = [P Ã— r Ã— (1 + r)^n] / [(1 + r)^n - 1], where P is Principal, r is Monthly Interest Rate (annual rate / 12 / 100), and n is Total Months.',
      },
      {
        question: 'What is the difference between Flat Rate and Reducing Balance Interest?',
        answer: 'Flat rate calculates interest on the initial principal forever. Reducing balance recalculates interest only on your remaining unpaid balance each month, resulting in substantially lower total interest.',
      },
      {
        question: 'How do extra principal prepayments reduce my loan cost?',
        answer: 'Every extra rupee paid goes 100% toward principal reduction. This reduces future compounding interest and can cut years off your mortgage or vehicle loan tenure.',
      },
      {
        question: 'Can I use this calculator for Home, Car, and Personal loans?',
        answer: 'Yes! Simply slide or enter the specific loan amount, interest rate (e.g. 6.5% for Home, 8.5% for Car, 10.5% for Personal), and tenure in years/months to see the exact monthly payout.',
      },
      {
        question: 'Does the calculator include bank processing fees and insurance?',
        answer: 'The EMI tool computes the pure monthly installment. Bank processing fees (typically 0.5%â€“2%) and loan protection insurance are one-time or amortized additions itemized during final sanction.',
      },
      {
        question: 'How does choosing a longer tenure affect my total interest paid?',
        answer: 'A longer tenure decreases your monthly EMI amount, but increases total interest paid over the life of the loan. A shorter tenure increases monthly EMI but minimizes total interest expense.',
      },
      {
        question: 'What is the Amortization Schedule table?',
        answer: 'An amortization table shows month-by-month breakdown of how much of each EMI goes toward paying interest versus how much reduces your principal loan balance.',
      },
      {
        question: 'Can I apply directly after calculating my EMI on this page?',
        answer: 'Yes! Once you find the ideal EMI and tenure combination, click the "Apply Now" button to submit your pre-filled inquiry directly to our credit desk.',
      },
    ],
  },

  vehicles: {
    title: 'Frequently Asked Questions',
    subtitle: 'Browse certified second-hand cars and two-wheelers in Tirunelveli with 100% clean paperwork.',
    items: [
      {
        question: 'How do you verify the condition of pre-owned cars and bikes?',
        answer: 'Every vehicle undergoes a stringent 140+ point inspection covering engine diagnostics, transmission, electricals, suspension, chassis integrity, and verified non-accidental history.',
      },
      {
        question: 'Do you handle the RTO RC ownership transfer for buyers?',
        answer: 'Yes! We handle 100% of the RTO paperwork, Form 29/30 filing, address verification, and deliver the newly transferred Registration Certificate (RC) to your doorstep.',
      },
      {
        question: 'Can I schedule a test drive in Tirunelveli before purchasing?',
        answer: 'Yes! You can book a free test drive online or visit our Tirunelveli showroom to test drive any car or motorcycle at your convenience.',
      },
      {
        question: 'Can I get financing / loan on the vehicles listed in the marketplace?',
        answer: 'Absolutely. We offer integrated used-vehicle loans with up to 85% funding, attractive interest rates, and approval within 24 hours directly through our desk.',
      },
      {
        question: 'Are there any hidden brokerages or commission fees for buyers?',
        answer: 'No hidden fees. Listed prices are fully transparent, with itemized transfer costs and optional warranty packages clearly specified upfront.',
      },
      {
        question: 'What documents will I receive upon completing the purchase?',
        answer: 'You will receive the vehicle invoice, delivery challan, transfer acknowledgment receipt, valid insurance policy copy, pollution certificate (PUCC), and original keys/manuals.',
      },
      {
        question: 'Can I exchange or trade in my old two-wheeler or car?',
        answer: 'Yes! We offer spot vehicle exchange. Bring your existing vehicle for a 20-minute inspection, and apply its valuation directly as down payment for your upgrade.',
      },
      {
        question: 'What if I want a specific vehicle model that is not listed?',
        answer: 'Reach out to our sourcing desk! With our dealer network across Tamil Nadu, we can source your desired make, model, and year within 3 to 7 days.',
      },
    ],
  },

  vehicleDetail: {
    title: 'Frequently Asked Questions',
    subtitle: 'Learn about booking tokens, inspection reports, warranty protection, and transfer steps.',
    items: [
      {
        question: 'How do I reserve or book this specific vehicle?',
        answer: 'You can place a nominal refundable booking token online or at our branch to lock the vehicle for 48 hours while you complete your test drive and financing checks.',
      },
      {
        question: 'Is the booking amount refundable if I change my mind?',
        answer: 'Yes, 100% refundable with zero deduction if you decide not to proceed prior to RTO transfer application submission.',
      },
      {
        question: 'Can I bring my own mechanic to inspect the vehicle?',
        answer: 'We actively encourage it! You are welcome to inspect every inch of the vehicle, plug in OBD scanners, and conduct a thorough road test with your trusted technician.',
      },
      {
        question: 'Is the odometer reading guaranteed genuine?',
        answer: 'Yes. We cross-verify the odometer reading against authorized brand service history records, insurance renewal logs, and RTO vehicle databases.',
      },
      {
        question: 'How long does the RTO transfer take to reflect in mParivahan?',
        answer: 'The transfer application is submitted within 24 hours of purchase, and the updated RC status typically reflects in mParivahan / Digilocker within 7 to 14 working days.',
      },
      {
        question: 'Is warranty included with this certified vehicle?',
        answer: 'Eligible certified cars and bikes include complimentary 6-month engine and transmission warranty with options to extend coverage up to 2 years.',
      },
    ],
  },

  carResale: {
    title: 'Frequently Asked Questions',
    subtitle: 'Get top market valuation, instant spot bank transfer, and zero-liability ownership transfer.',
    items: [
      {
        question: 'How do you determine the valuation of my car?',
        answer: 'We evaluate real-time Tamil Nadu resale market trends, vehicle age, odometer reading, cosmetic condition, service history, and engine health to give you the highest competitive price.',
      },
      {
        question: 'How fast do I receive payment after selling my car?',
        answer: 'Instant payment! Once the agreement is signed and physical keys/documents are handed over, the full amount is credited to your bank account via IMPS/RTGS on the spot.',
      },
      {
        question: 'Am I protected from future traffic challans or liabilities after sale?',
        answer: 'Yes! We issue an official legal Delivery Receipt and indemnity agreement transferring full operational liability to us immediately, followed by guaranteed RTO transfer.',
      },
      {
        question: 'Can I sell a car that currently has an active bank loan / hypothecation?',
        answer: 'Yes! We coordinate directly with your lending bank to clear the outstanding loan balance, obtain the Foreclosure Letter / NOC, and pay you the remaining equity balance.',
      },
      {
        question: 'Do I have to bring my car to your office for inspection?',
        answer: 'We provide free doorstep inspection across Tirunelveli and nearby towns, or you can drive into our Thirunagar office for a 20-minute rapid evaluation.',
      },
      {
        question: 'What documents do I need to provide when selling my car?',
        answer: 'Original RC Book, valid Insurance policy, latest PUC certificate, duplicate key, Aadhaar card, PAN card, and bank account details for instant fund transfer.',
      },
      {
        question: 'Are there any hidden inspection or paperwork deduction charges?',
        answer: 'Zero deductions. Our valuation quote is 100% net to you, with all RTO transfer charges and documentation fees absorbed by SM Associate.',
      },
      {
        question: 'What happens if my car has minor dents or pending repairs?',
        answer: 'We buy cars in as-is condition. Minor dents, paint scratches, or pending tire changes are transparently factored into the valuation without delaying the sale.',
      },
    ],
  },

  sellVehicle: {
    title: 'Frequently Asked Questions',
    subtitle: 'Sell your bike, scooter, or car in 3 simple steps with guaranteed best market price.',
    items: [
      {
        question: 'How do I start the process to sell my vehicle?',
        answer: 'Simply fill out our 1-minute vehicle submission form with your vehicle make, model, year, and mileage, and our valuation specialist will call you with a preliminary quote.',
      },
      {
        question: 'Can I sell my two-wheeler / bike through this platform?',
        answer: 'Yes! We buy all brands of scooters and motorcycles (Honda, TVS, Yamaha, Royal Enfield, Bajaj, Hero, Suzuki, KTM) with instant same-day spot cash settlement.',
      },
      {
        question: 'Do I have to negotiate with multiple random buyers?',
        answer: 'Never! SM Associate buys directly or handles verified buyers, eliminating annoying phone calls, lowball offers, and risky test drives by strangers.',
      },
      {
        question: 'How does doorstep evaluation work?',
        answer: 'Our certified mobile evaluator visits your home or workplace at your scheduled time, completes a 15-minute physical check, and provides a final binding purchase offer.',
      },
      {
        question: 'What if my vehicle registration is from another RTO district in TN?',
        answer: 'We accept vehicles registered in any RTO across Tamil Nadu (TN-72, TN-76, TN-69, TN-01 to TN-99) and manage inter-RTO clearance and NOC seamlessly.',
      },
      {
        question: 'Is my sale agreement legally binding?',
        answer: 'Yes, both parties sign an authorized Stamp Paper / legal sales agreement with valid date and time stamps protecting both seller and buyer rights.',
      },
    ],
  },

  contact: {
    title: 'Frequently Asked Questions',
    subtitle: 'Get quick answers about visiting our office, response times, and application tracking.',
    items: [
      {
        question: 'What are your operating hours and office address?',
        answer: 'Our main office is at No 183 E4, Nellaiapper High Road, Thirunagar, Tirunelveli Junction, open Monday to Saturday from 9:00 AM to 6:00 PM.',
      },
      {
        question: 'How fast will an advisor get back to my online message?',
        answer: 'During business hours, our support team responds within 15 to 30 minutes. Messages submitted overnight are addressed first thing the following morning.',
      },
      {
        question: 'Can I reach your team directly via WhatsApp?',
        answer: 'Yes! You can message us anytime at +91 9790219874 on WhatsApp for instant rate queries, document uploads, and quick status tracking.',
      },
      {
        question: 'Can I book a personalized one-on-one financial planning session?',
        answer: 'Yes! Submit your contact details with a note requesting a consultation, and we will schedule an in-person or telephonic session with a senior mortgage/credit advisor.',
      },
      {
        question: 'Do you charge any fee for loan consultation or eligibility review?',
        answer: 'No, our initial consultation, eligibility evaluation, and bank comparisons are 100% free with no obligation to proceed.',
      },
      {
        question: 'How do I track the current status of my submitted loan application?',
        answer: 'You can call our dedicated support desk at +91 9790219874 / +91 9047007720 with your application reference ID or registered phone number for real-time updates.',
      },
    ],
  },

  blog: {
    title: 'Frequently Asked Questions',
    subtitle: 'Insights, market updates, credit score tips, and automobile buying strategies.',
    items: [
      {
        question: 'What topics does the SM Associate blog cover?',
        answer: 'We publish in-depth guides on home and personal loans, CIBIL credit score improvement, auto market trends, used-vehicle inspection checklists, and tax-saving strategies.',
      },
      {
        question: 'How often are new articles and interest rate updates published?',
        answer: 'We publish fresh market analyses, RBI repo rate updates, and practical financing guides bi-weekly to keep borrowers and car buyers well informed.',
      },
      {
        question: 'Can I request a guide on a specific financial or automotive topic?',
        answer: 'Yes! Send us a message via our Contact page with your requested topic, and our editorial and advisory team will be glad to feature it in upcoming posts.',
      },
      {
        question: 'How can I apply the tips from these articles to my loan application?',
        answer: 'Every blog post includes actionable steps and direct links to our interactive calculators and advisory desks to help you put advice into practice immediately.',
      },
      {
        question: 'Are the interest rates quoted in articles updated with latest RBI repo rates?',
        answer: 'Yes, our finance team regularly audits and updates interest benchmarks and policy details following every RBI Monetary Policy Committee meeting.',
      },
      {
        question: 'Can I share these articles with friends and family?',
        answer: 'Please do! You can share our articles via WhatsApp, LinkedIn, Facebook, or Twitter using the share links on each article page.',
      },
    ],
  },

  blogDetail: {
    title: 'Frequently Asked Questions',
    subtitle: 'Need more clarification on the insights shared in this article? Explore quick answers below.',
    items: [
      {
        question: 'How can I discuss this article with an SM Associate specialist?',
        answer: 'Click the "Apply Now" or "Contact Us" buttons on this page to discuss custom scenarios, loan restructuring, or vehicle options with our team.',
      },
      {
        question: 'How do recent regulatory changes affect the advice in this guide?',
        answer: 'Our insights adhere strictly to the latest RBI and IRDAI directives. We update figures whenever statutory guidelines or lending rules change.',
      },
      {
        question: 'Can I get a personalized calculation tailored to my numbers?',
        answer: 'Yes! Use our free online EMI Calculator or send your numbers via WhatsApp for a tailored loan amortization projection.',
      },
      {
        question: 'Where can I read more related articles?',
        answer: 'Explore our full library in the Blog section for interconnected guides on credit scores, home mortgages, vehicle resale, and personal finance.',
      },
    ],
  },

  goldResale: {
    title: 'Gold Resale FAQs',
    subtitle: 'Clear answers about valuation, verification, the resale process, and what to expect before you sell.',
    items: [
      {
        question: 'How does gold resale work?',
        answer: 'You bring eligible gold items for assessment, receive valuation guidance, review the proposed transaction details, and complete the required verification before the sale is finalized.',
      },
      {
        question: 'Is gold resale the same as taking a gold loan?',
        answer: 'No. Gold resale is a sale of eligible gold items. A gold loan involves pledging gold as security for borrowing. The Gold Resale page is for customers who want to explore selling their gold.',
      },
      {
        question: 'How is the resale value of gold determined?',
        answer: 'The value can depend on factors such as purity, weight, the type of item, and the applicable market conditions at the time of assessment. The final transaction value is confirmed after evaluation.',
      },
      {
        question: 'What should I bring for a gold valuation?',
        answer: 'Bring the gold items you want assessed and a valid identity document. Purchase or ownership information and payment details may also be requested depending on the transaction.',
      },
      {
        question: 'Can I ask questions before deciding to sell?',
        answer: 'Yes. You can discuss the valuation approach, verification requirements, and transaction details with the SM Associate team before deciding whether to proceed.',
      },
      {
        question: 'How long does the gold resale process take?',
        answer: 'The time can vary depending on the items, verification, and transaction requirements. The team will explain the expected steps and timing during your enquiry.',
      },
      {
        question: 'Do you accept all types of gold items?',
        answer: 'Eligibility can depend on the item and the assessment requirements. Share the type of gold you have with the team so they can confirm whether it can be considered for resale.',
      },
      {
        question: 'Where can I enquire about gold resale?',
        answer: 'You can submit the Gold Resale enquiry form on this page or contact SM Associate in Tirunelveli to discuss your gold valuation requirements.',
      },
    ],
  },

  privacyPolicy: {
    title: 'Frequently Asked Questions',
    subtitle: 'Transparent details on how we safeguard, encrypt, and respect your personal information.',
    items: [
      {
        question: 'What personal information does SM Associate collect?',
        answer: 'We only collect essential details required for loan eligibility matching and vehicle transactions, such as name, contact number, income bracket, and KYC documents.',
      },
      {
        question: 'Is my personal data ever sold or rented to third-party telemarketers?',
        answer: 'Never. We do not sell, rent, or trade your personal data. Information is shared strictly with authorized partner banks/NBFCs with your explicit consent for loan processing.',
      },
      {
        question: 'How is my financial and KYC data secured?',
        answer: 'All data is stored in bank-grade encrypted databases (AES-256) and transmitted via secure TLS/HTTPS protocols with strict role-based access controls.',
      },
      {
        question: 'Can I request deletion or update of my personal data?',
        answer: `Yes. You can contact our data protection team at ${process.env.CONTACT_TO_EMAIL || 'your email'} anytime to request review, update, or deletion of your stored records.`,
      },
      {
        question: 'How long do you retain my submitted documents?',
        answer: 'Documents are retained only for the duration necessary to complete your loan sanction or vehicle transfer, and in accordance with statutory compliance guidelines.',
      },
      {
        question: 'Does your website use cookies?',
        answer: 'We use standard functional and analytical cookies solely to enhance browsing performance and analyze user traffic, never for unauthorized tracking.',
      },
    ],
  },

  termsConditions: {
    title: 'Frequently Asked Questions',
    subtitle: 'Key guidelines governing our financial brokerage, vehicle marketplace, and advisory services.',
    items: [
      {
        question: 'What is the role of SM Associate in loan transactions?',
        answer: 'SM Associate operates as an authorized corporate direct sales associate (DSA) and advisory intermediary connecting borrowers with certified partner banks and NBFCs.',
      },
      {
        question: 'Who makes the final loan sanction and interest rate decision?',
        answer: 'The final credit decision, interest rate pricing, and sanction terms are determined by the respective underwriting banks/NBFCs in accordance with their internal policies.',
      },
      {
        question: 'What are the buyer and seller obligations in vehicle marketplace transactions?',
        answer: 'Sellers must disclose accurate vehicle history and clear encumbrances. Buyers agree to inspect the vehicle prior to final sale and cooperate with timely RTO transfer.',
      },
      {
        question: 'Are quoted interest rates and EMI figures binding?',
        answer: 'Online calculators provide accurate mathematical estimates. Final contractual APR and fees are established upon official bank sanction letter issuance.',
      },
      {
        question: 'Which jurisdiction applies in the event of legal disputes?',
        answer: 'All services and agreements are governed by the laws of India and subject to the exclusive jurisdiction of the competent courts in Tirunelveli, Tamil Nadu.',
      },
      {
        question: 'How can I resolve a grievance or service issue?',
        answer: `We maintain a dedicated customer grievance cell. You can reach out directly to ${process.env.CONTACT_TO_EMAIL || 'your email'} or call +91 9790219874 for prompt resolution within 48 hours.`,
      },
    ],
  },

  disclaimer: {
    title: 'Frequently Asked Questions',
    subtitle: 'Statutory notices regarding financial calculations, partner approvals, and vehicle listings.',
    items: [
      {
        question: 'Is SM Associate a bank or deposit-taking institution?',
        answer: 'No. SM Associate is an independent financial brokerage and automotive advisory firm, not a deposit-taking bank or non-banking financial institution.',
      },
      {
        question: 'Are loan approvals guaranteed by SM Associate?',
        answer: 'We guarantee the highest possible matching accuracy and fastest processing, but formal sanction is subject to the lending institution\'s credit verification and risk policies.',
      },
      {
        question: 'How accurate are vehicle valuations and listings?',
        answer: 'Vehicle valuations represent estimated fair market values based on condition and historical pricing. Physical inspection by the buyer is always recommended before final deal.',
      },
      {
        question: 'Do interest rates change after application submission?',
        answer: 'Interest rates fluctuate based on RBI policy rate revisions and individual credit profile evaluation at the time of final bank sanction.',
      },
      {
        question: 'Are there any upfront fees demanded by SM Associate agents?',
        answer: 'No SM Associate representative will ever ask for cash or upfront deposits into personal accounts. All fees are paid directly to verified partner institutions.',
      },
      {
        question: 'How do I verify the authenticity of an SM Associate representative?',
        answer: 'Every authorized executive carries an official SM Associate identification card. You can verify any representative by calling our headquarters at +91 9790219874.',
      },
    ],
  },
};


