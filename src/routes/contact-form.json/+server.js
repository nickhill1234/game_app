import { json as json$1 } from '@sveltejs/kit'

const AIRTABLE_BASE_ID = 'appeJrM4DL4G5KYci'
const AIRTABLE_TOKEN = 'key236yISpxV7ghGI'

export const POST = async ({ request }) => {
  const fd = await request.formData()

  const name = fd.get('name')
  const message = fd.get('message')

  const AIRTABLE_URL = `https://api.airtable.com/v0/${AIRTABLE_BASE_ID}/submissions`

  let data = {
    records: [
      {
        fields: {
          name,
          message,
        },
      },
    ],
  }
  const res = await fetch(AIRTABLE_URL, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${AIRTABLE_TOKEN}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })

  if (res.ok) {
    return json$1({
      message: 'success',
    })
  } else {
    return json$1(
      {
        message: 'failed',
      },
      {
        status: 404,
      }
    )
  }
}