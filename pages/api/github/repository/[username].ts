// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  success: boolean,
  message: string,
  data?: any
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { username } = req.query

  fetch(`https://api.github.com/users/${username}/repos?sort=created&direction=desc`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then(response => response.json())
    .then(data => {
      return res.status(200).json({ success: true, message: `Success Retreive User ${username}`, data: data})
    })
    .catch((error) => {
      res.status(500).json({ success: false, message: "Internal Server Error" })
    });


}
