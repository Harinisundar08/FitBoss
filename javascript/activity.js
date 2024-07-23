document.addEventListener("DOMContentLoaded", () => {
    const watchLaterContainer = document.createElement("div");
    watchLaterContainer.classList.add("video-gallery");
    document.body.appendChild(watchLaterContainer);

    const watchLaterList = JSON.parse(localStorage.getItem("watchLaterList")) || [];
    watchLaterList.forEach(videoURL => {
        const videoContainer = document.createElement("div");
        videoContainer.classList.add("video-container");

        const videoElement = document.createElement("video");
        videoElement.controls = true;
        const sourceElement = document.createElement("source");
        sourceElement.src = videoURL;
        sourceElement.type = "video/mp4";
        videoElement.appendChild(sourceElement);

        const videoActions = document.createElement("div");
                videoActions.classList.add("video-actions");

                const removeButton = document.createElement("button");
                removeButton.textContent = "Remove";
                removeButton.classList.add("remove-button");
                removeButton.addEventListener("click", () => {
                    removeVideo(videoURL, videoContainer);
                });

                videoActions.appendChild(removeButton);
                videoContainer.appendChild(videoElement);
                videoContainer.appendChild(videoActions);
                watchLaterContainer.appendChild(videoContainer);
            });

            function removeVideo(videoURL, videoElement) {
                const updatedList = watchLaterList.filter(url => url !== videoURL);
                localStorage.setItem("watchLaterList", JSON.stringify(updatedList));
                watchLaterContainer.removeChild(videoElement);
            }
        });