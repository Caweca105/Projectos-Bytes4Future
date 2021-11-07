import { useToast } from '@chakra-ui/react'

function ToastForm() {
    const toast = useToast()
    
    return (
        <Button
            onClick={() => 
                toast({
                    title: "Form sent",
                    description: "I've received your contact form. I'll reach out as soon as possible. Thank you",
                    status: "success",
                    duration: 9000,
                    isClosable: true,
                })
            }
        >
            Show Toast
        </Button>
    )
}

export default ToastForm