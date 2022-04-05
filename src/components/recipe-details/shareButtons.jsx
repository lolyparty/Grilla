import React from "react";
import { TwitterShareButton, FacebookShareButton, TwitterIcon, FacebookIcon } from "react-share";

const ShareButtons = ({ detailsResult}) => {
    return <div className="flex justify-center my-4">

    <FacebookShareButton className="mr-2" url={`https://grilla.vercel.app/${detailsResult.id}`} quote={`Guys! check out the recipe of ${detailsResult.title} on Grilla`} hashtag="Grilla" resetButtonStyle={false} >
        <FacebookIcon round={true} size={32} />
    </FacebookShareButton>
    
    <TwitterShareButton className="ml-4" url={`https://grilla.vercel.app/${detailsResult.id}`} title={`Guys! check out the recipe of ${detailsResult.title} on Grilla`} hashtags={["Grilla"]} resetButtonStyle={false}>
    <TwitterIcon size={32} round={true} />
    </TwitterShareButton>
</div>
}

export {ShareButtons}