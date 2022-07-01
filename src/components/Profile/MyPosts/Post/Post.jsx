import s from "./Post.module.css"

const Post = (props) => {
    return (

        <div className={s.item}>
            <img src='https://www.researchgate.net/publication/353422038/figure/fig2/AS:1048906112700416@1627090113328/Image-7-4-3-2-5-9-3-11-45-3-0-2-4-0-1-7.ppm'/>
            {props.message}
            <div>
                <span>Like {props.likesCount}</span>
            </div>
        </div>

    );
}

export default Post;
