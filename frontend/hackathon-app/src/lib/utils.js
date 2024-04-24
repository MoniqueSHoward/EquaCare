import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs) {
  return twMerge(clsx(inputs))
}








// import requests
// import json

// url = "https://api.vectara.io/v1/query"

// payload = json.dumps({
//   "query": [
//     {
//       "query": "What is the answer to the life, the universe, and everything?",
//       "start": 0,
//       "numResults": 10,
//       "contextConfig": {
//         "sentences_before": 3,
//         "sentences_after": 3,
//         "start_tag": "<b>",
//         "end_tag": "</b>"
//       },
//       "corpusKey": [
//         {
//           "corpus_id": 3
//         }
//       ],
//       "summary": [
//         {
//           "max_summarized_results": 10,
//           "response_lang": "en"
//         }
//       ]
//     }
//   ]
// })
// headers = {
//   'Content-Type': 'application/json',
//   'Accept': 'application/json',
//   'customer-id': '29746375',  # Replace with your actual customer ID
//   'x-api-key': 'zqt_AcXkxwyKoj6M45VSTlSnizzu0WOVaDpRJCJ67Q'  # Replace with your actual API key
// }

// response = requests.request("POST", url, headers=headers, data=payload)

// print(response.text)
