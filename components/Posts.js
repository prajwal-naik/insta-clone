import Post from "./Post"

const posts = [
    {
        id: "123",
        username: "prjwl.nkn",
        userImg: "https://links.papareact.com/3ke",
        img: "https://links.papareact.com/3ke",
        caption: "SOME IMAGE BRUH",
    },
    {
        id: "123",
        username: "prjwl.nkn",
        userImg: "https://links.papareact.com/3ke",
        img: "https://links.papareact.com/3ke",
        caption: "SOME IMAGE BRUH",
    },
    {
        id: "123",
        username: "prjwl.nkn",
        userImg: "https://links.papareact.com/3ke",
        img: "https://links.papareact.com/3ke",
        caption: "SOME IMAGE BRUH",
    },
]

function Posts() {
    return (
        <div>
            {
                posts.map((post) => (
                    <Post
                        key = {post.id}
                        id = {post.id}
                        username = {post.username}
                        userImg = {post.userImg}
                        img = {post.img}
                        caption = {post.caption}
                    />
                ))
            }
        </div>
    )
}

export default Posts
