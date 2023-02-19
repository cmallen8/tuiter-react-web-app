import PostSummaryItem from "./PostSummaryItem.js";
import post from "./posts.js"

const PostSummaryList = (exploreItems) => {
    return (`
        <ul class="list-group">            
            ${
        post.map(post => {
            return (PostSummaryItem(post));
        }).join('')
    }

        </ul>
    `);
}
export default PostSummaryList;