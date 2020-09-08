export class Helper {
  static mergePartsQuery(parts, operator) {
    let sub = parts.filter((part) => {
      return part
    }).map((part) => {
      return `(${part})`
    })
    return sub.join(` ${operator} `)
  }

  static handleResponse(response)
  {
    if (response instanceof Error) {
      throw response
    }

    if (response.status === 500) {
      response.body.errors = [
        {
          'message': response.body.message
        }
      ]
    }
  }
};
