import Head from 'next/head'
import Navbar from '../components/Navbar'

export default function Home() {
  return (
    <>
      <Head>
        <title>Credit Analyst</title>
        <meta name="description" content="Welcome to the Credit Analyst website!" />
      </Head>

      <Navbar />

      <div className="container">
        <div className="header">
          <h1>Welcome to Credit Analyst Portal</h1>
          <p>Your trusted source for insights, tools, and best practices in credit risk and compliance.</p>
        </div>

        <section>
          <h2>💼 What is AML (Anti-Money Laundering)?</h2>
          <p>
            Anti-Money Laundering (AML) refers to a set of laws, regulations, and procedures designed to prevent criminals from disguising illegally obtained funds as legitimate income.
          </p>
        </section>

        <section>
          <h2>🔍 How Does AML Work?</h2>
          <ul>
            <li><strong>Monitoring Transactions:</strong> Banks and financial institutions track unusual or suspicious activities.</li>
            <li><strong>Customer Due Diligence (CDD):</strong> Verifying customer identity and risk level.</li>
            <li><strong>Suspicious Activity Reports (SARs):</strong> Filed when transactions raise red flags.</li>
            <li><strong>KYC (Know Your Customer):</strong> Essential part of onboarding and ongoing monitoring.</li>
          </ul>
        </section>

        <section>
          <h2>🧠 How Credit Analysts Help Prevent and Detect AML Risks</h2>
          <ul>
            <li>Analyze financial statements to spot inconsistencies or irregular flows of funds.</li>
            <li>Flag unusual loan applications or repayments that don’t match the customer profile.</li>
            <li>Ensure compliance with KYC (Know Your Customer) and risk assessment protocols.</li>
            <li>Collaborate with compliance teams to review suspicious patterns.</li>
          </ul>
        </section>

        <section style={{ marginTop: '2rem' }}>
          <a href="/about" className="btn">Learn More About Us</a>
        </section>
      </div>
    </>
  )
}
