export default function Schema(){

const schema={

"@context":"https://schema.org",

"@type":"Organization",

name:"Purvex Tech Studio",

url:"https://purvextechstudio.com",

logo:"https://purvextechstudio.com/logo.png",

email:"infopurvextechstudio@gmail.com"

}

return(

<script
type="application/ld+json"
dangerouslySetInnerHTML={{
__html:JSON.stringify(schema)
}}
/>

)

}