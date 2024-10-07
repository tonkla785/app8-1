import React from 'react'

export default function FormPost(){
    let[postedData, setPostedData] = React.useState('')
    const form = React.useRef()

    const onSubmitForm = (event) => {
        event.preventDefault()
        const formData = new FormData(form.current)
        const formEnt = Object.fromEntries(formData.entries())
        fetch('/api/form-post',{
            method:'POST',
            body:JSON.stringify(formEnt),
            headers:{'Content-Type':'application/json'}
        })
        .then(response => response.text())
        .then(result => setPostedData(result))
        .catch(err => alert(err))
    }
    const inputStyle = {
        margin: '5px 0',
    }
    return(
        <div style={{margin:'30px'}}>
            <form ref={form} onSubmit = {onSubmitForm}>
                <div>contact us</div>
                <input type = 'text' name ='name' size ='43' placeholder='Name'
                style={inputStyle}/><br/>
                <input type = 'email' name ='email' size ='43' placeholder='Email'
                style={inputStyle}/><br/>
                <textarea name ='message' cols ='40' row ='4' placeholder='Message'
                style={inputStyle}></textarea><br/>
                <button>Submit</button>
            </form>
            <br/>
            <div dangerouslySetInnerHTML={{__html:postedData}}></div>
        </div>
    )
}