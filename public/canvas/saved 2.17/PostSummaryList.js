import PostSummaryItem from "../../tuiter/PostSummaryList/PostSummaryItem.js";
import post from "../../tuiter/PostSummaryList/posts.js"

const PostSummaryList = () => {
    return (`
        <ul class="list-group">
            <li class="list-group-item">
                <span class="fw-bold">TEST</span>
            </li>
            ${
        post.map(post => {
            return (PostSummaryItem(post));
        }).join('')
    }
        </ul>
    `);
}
export default PostSummaryList;