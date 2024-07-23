
        document.addEventListener("DOMContentLoaded", () => {
            const likeButtons = document.querySelectorAll(".fa-thumbs-up");
            const shareButtons = document.querySelectorAll(".fa-share-alt");
            const watchLaterButtons = document.querySelectorAll(".video-actions button");

            likeButtons.forEach(button => {
                button.addEventListener("click", () => {
                    button.classList.toggle("liked");
                });
            });

            shareButtons.forEach(button => {
                button.addEventListener("click", () => {
                    const video = button.closest(".video-container").querySelector("video");
                    const videoURL = video.querySelector("source").src;
                    navigator.clipboard.writeText(videoURL).then(() => {
                        alert("Video URL copied to clipboard!");
                    }).catch(err => {
                        console.error("Failed to copy: ", err);
                    });
                });
            });

            watchLaterButtons.forEach(button => {
                button.addEventListener("click", () => {
                    const video = button.closest(".video-container").querySelector("video");
                    const videoURL = video.querySelector("source").src;
                    let watchLaterList = JSON.parse(localStorage.getItem("watchLaterList")) || [];
                    if (!watchLaterList.includes(videoURL)) {
                        watchLaterList.push(videoURL);
                        localStorage.setItem("watchLaterList", JSON.stringify(watchLaterList));
                        alert("Video added to Watch Later!");
                    } else {
                        alert("Video already in Watch Later!");
                    }
                });
            });
        });
    