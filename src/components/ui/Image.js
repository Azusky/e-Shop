

const Image =({ url, alt=''})=>{
    return(
            <img src={url} alt={alt} width="200" height="300" />
    );
}

export default Image
