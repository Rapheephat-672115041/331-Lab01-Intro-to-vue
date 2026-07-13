const reviewList = {
    template:
    /*html*/
    `
    <div class="review-container">
        <h3>Reviews:</h3>
        <ul>
            <li v-for="(review, index) in reviews" :key="index">
                {{ review.name }} gave this {{ review.rating }} stars
                "{{ review.review }}"
                <br>
                <span v-if="review.recommend === 'yes'">👍 Would recommend</span>
                <span v-else-if="review.recommend === 'no'">🖕 Would not recommend</span>
            </li>
        </ul>
    </div>
    `,
    props: {
        reviews: {
            type: Array
        }
    },
    setup(props) {
        const reviews = props.reviews
        return {
            reviews
        }
    }
}