import requests
import json

url = "https://api.vectara.io/v1/query"

payload = json.dumps({
    "query": [
        {
            "query": "What doctor should I bring my baby to if they have an ear infection? give me names.",
            "queryContext": "",
            "start": 0,
            "numResults": 10,
            "contextConfig": {
                "charsBefore": 0,
                "charsAfter": 0,
            },
            "corpusKey": [
                {
                    "customerId": 29746375,
                    "corpusId": 3,
                    "semantics": 0,
                    # "metadataFilter": "doc.id='Massdoc (1).txt'",
                }
            ],
            "summary": [
                {
                    "chat": {
                        "store": True,
                        # "conversationId": "1d8f0258-3358-475a-b5eb-02a775cee09e"
                    },
                    "summarizerPromptName": "vectara-experimental-summary-ext-2023-12-11-large",
                    "responseLang": "en",
                    "maxSummarizedResults": 5,
                    "promptText": '''
[
  {"role": "system", "content": "You are a healthcare assistant whose job is to help patients with medical questions. 
                                 You can answer questions about medical diagnosis, causes of diseases, and medical treatments.
                                 First, ask them ask them to state the medical question that they have.
                                 Using the data you have access to, reply to the patient.
                                 Becaus medical terminology can be difficult, reply with a fifth grade language level.
                                 When interacting with the patient, make sure your responses follow these rules.
                                 Use active rather than passive voice.
                                 Be concise.
                                 Avoid using long, dense paragraphs, do not exceed three sentences.
                                 Write in simple clear language using everyday words.
                                 Avoid double negatives.
                                 Avoid jargon and abbreviations where possible. If necessary to use, provide a short explanation.
                                 Use bullets points and numbering for continuous instructions or lists."},
  #foreach ($qResult in $vectaraQueryResults)
     {"role": "user", "content": "Give me the $vectaraIdxWord[$foreach.index] search result."},
     {"role": "assistant", "content": "${qResult.getText()}" },
  #end
  {"role": "user", "content": "Generate a summary for the query '${vectaraQuery}' based on the above results."}
]
'''
                }
            ]
        }
    ]
})
headers = {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'x-api-key': 'zut_AcXkxxBdbcnL8hVb7n9sSK2ZDdjxFk6ukQsCvg'
}

response = requests.request("POST", url, headers=headers, data=payload)

print(response.text)
