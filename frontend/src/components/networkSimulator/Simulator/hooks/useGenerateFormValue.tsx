interface Form {
  id: string
  type: string
  requestPort?: string
  responsePort?: string
  inboundPort?: string
  outboundPort?: string
}

const useGenerateFormValue = ({
  id,
  type,
  requestPort = '',
  responsePort = '',
  inboundPort = '',
  outboundPort = '',
}: Form) => {

  let formValue = {}

  switch (type) {
    case 'Client':
    case 'Web': {
      formValue = {
        id,
        type,
        requestPort,
        responsePort,
      }
      break;
    }
    case 'Lan':
    case 'Gateway': {
      formValue = {
        id,
        type,
        inboundPort,
        outboundPort,
      }
      break;
    }
    default: alert(`error`)
  }

  return formValue
}

export default useGenerateFormValue
