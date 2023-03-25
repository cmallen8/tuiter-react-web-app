import PostItem from "./PostItem.js";


const PostList = (posts) => {
    return (`
        <ul class="list-group">
                ${
        totalPost.map(totalPost => {
            return (PostItem(totalPost));
        }).join('')
    }
        </ul>
            `);
}
export default PostList;