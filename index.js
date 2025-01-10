const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
];


function renderPost(postsArray) {
    
    const postContainer = document.getElementById("post-container");
    
    for (i = 0; i < postsArray.length; i++) {
     
        postContainer.innerHTML += ` 
                <div class="single-post">
                
                      <!-- user info section -->
                    <section class="user-info">
                        <img class="user-picture" src=${postsArray[i].avatar} alt=${postsArray[i].username} profile picture">
                        <div class="user-details">
                            <p><span class="bolder-font">${postsArray[i].name}</span></p>
                            <p class="smaller-font">${postsArray[i].location}</p>
                        </div>
                    </section>

                    <!-- The figure element represents a self-contained content, and figcaption element describes the figure -->
                    <figure class="post-content">
                        <img class="post-image" src=${postsArray[i].post}/>

                    <!-- reactions and comments section -->
                        <figcaption class="post-body number-${i}">
                            <div class="reaction-icons">
                                <img id="heart-${i}" class="reaction-heart" src="images/icon-heart.png"/>
                                <img class="reaction-comment" src="images/icon-comment.png"/>
                                <img class="reaction-dm" src="images/icon-dm.png"/>
                            </div>
                            <p class="like-count bolder-font">${postsArray[i].likes}</p>
                            <p class="user-caption"><span class="bolder-font">${postsArray[i].username}</span>${postsArray[i].comment}</p>
                        </figcaption>
                    </figure>
                <div>
                `;      
    }
}

renderPost(posts);

const heartReactionEl = document.body.querySelector("heart-");
