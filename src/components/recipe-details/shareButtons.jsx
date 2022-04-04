import React from "react";

const ShareButtons = ({params, detailsResult}) => {
    return <div className="flex justify-center my-4">

    <div className="mr-2" id={params.id}>
        <div class="fb-share-button"
        data-href={`https://grilla.vercel.app/${detailsResult.id}`} 
        data-layout="button_count" data-size="large">
        </div>
    </div>
    <div className="ml-4" id={params.id}>
        <a href="https://twitter.com/share?ref_src=twsrc%5Etfw" class="twitter-share-button" data-show-count="false" data-size="large" data-text={`Guys! check out the recipe for ${detailsResult.title} on Grilla`}>Tweet</a>
        <a style={{display:'none'}} href="https://platform.twitter.com/widgets.js">ok</a>
    </div>
</div>
}

export {ShareButtons}