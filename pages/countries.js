import Head from 'next/head'
import Navbar from '../components/Navbar'

export default function Countries() {
  return (
    <>
      <Head>
        <title>AML Country Risk | Credit Analyst</title>
      </Head>

      <Navbar />

      <div className="container">
        <h1>Countries with High AML Risk</h1>
        <p>This page contains detailed risk ratings and analysis of countries monitored under AML frameworks.</p>
        
        <section>
          <h2>🌍 Countries with High AML Risk</h2>
          <p>
            As a credit analyst, it's critical to be aware of countries that frequently trigger AML flags. These countries are rated based on global monitoring, sanctions, and known laundering risks.
          </p>
          <p><strong>FATF</strong> stands for <em>Financial Action Task Force</em>, which monitors countries' AML effectiveness and issues global watchlists.</p>

          <div className="table-wrapper">
            <table className="aml-table">
              <thead>
                <tr>
                  <th>Country</th>
                  <th>Risk Level</th>
                  <th>Notes</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>China 🇨🇳</td>
                  <td className="risk-medium">Medium</td>
                  <td>Underground banking, trade-based laundering</td>
                </tr>
                <tr>
                  <td>Russia 🇷🇺</td>
                  <td className="risk-high">High</td>
                  <td>Sanctions, oligarch-linked transfers</td>
                </tr>
                <tr>
                  <td>Iran 🇮🇷</td>
                  <td className="risk-high">High</td>
                  <td>FATF blacklist, sanctions</td>
                </tr>
                <tr>
                  <td>Pakistan 🇵🇰</td>
                  <td className="risk-medium">Medium</td>
                  <td>FATF grey list, terror financing risks</td>
                </tr>
                <tr>
                  <td>North Korea 🇰🇵</td>
                  <td className="risk-high">High</td>
                  <td>State-controlled laundering, cybercrime</td>
                </tr>
                <tr>
                  <td>Mexico 🇲🇽</td>
                  <td className="risk-medium">Medium</td>
                  <td>Drug-related laundering, cash flow issues</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </>
  )
}
