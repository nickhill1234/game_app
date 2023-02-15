import { json as json$1 } from '@sveltejs/kit'

export const POST = async ({ request }) => {
  const fd = await request.formData()

  const name = fd.get('name')
  const answer = fd.get('answer')
  const time = fd.get('time')

  const AIRTABLE_BASE_ID = import.meta.env.VITE_AIRTABLE_BASE_ID
  const AIRTABLE_TOKEN = import.meta.env.VITE_AIRTABLE_TOKEN
  const AIRTABLE_URL = `https://api.airtable.com/v0/${AIRTABLE_BASE_ID}/submissions`

  let data = {
    records: [
      {
        fields: {
          name,
          answer,
          time,
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