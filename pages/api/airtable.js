const Airtable = require('airtable')

// Initialize Airtable
const base = new Airtable({
  apiKey:
    'patqfww5zI0H2bnPD.3afd42d3fa81ffac11d5b4f85fa13a9df7162451344fc6152d9447c92e7b4217'
}).base('appuFIB43SekNMwV3')

export default async function handler(req, res) {
  try {
    // Fetch data from Sheet1
    const resources = await base('resources')
      .select({ view: 'Grid view' })
      .all()
    const sheet1Data = resources.map((record) => ({
      id: record.id,
      fields: record.fields
    }))

    // Fetch data from Sheet2
    const projects = await base('projects').select({ view: 'Grid view' }).all()
    const sheet2Data = projects.map((record) => ({
      id: record.id,
      fields: record.fields
    }))

    // Fetch data from Sheet3
    const repos = await base('repos').select({ view: 'Grid view' }).all()
    const sheet3Data = repos.map((record) => ({
      id: record.id,
      fields: record.fields
    }))

    // Combine data from all sheets
    const allData = {
      resources: sheet1Data,
      projects: sheet2Data,
      repos: sheet3Data
    }

    req.method === 'GET'
      ? res.status(200).json(allData)
      : res.status(405).json({ msg: 'Method not allowed' })
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: 'An error occurred' })
  } finally {
    res.end()
  }
}
