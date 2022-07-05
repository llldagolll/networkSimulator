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

  const formValue: Form = {
    id,
    type,
  }

  switch (type) {
    case 'Lan':
    case 'Gateway': {
      formValue.inboundPort = inboundPort;
      formValue.outboundPort = outboundPort;
      break;
    }
    default: {
      formValue.requestPort = requestPort;
      formValue.responsePort = responsePort;
      break;
    }

  }

  return formValue
}

export default useGenerateFormValue
