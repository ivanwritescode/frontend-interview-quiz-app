const QuestionsNavigation = () => {
    return (
        <section className="questions-nav-section">
            <p className="question-context">
                <a href="#"><span className="question-num">Question 11/20</span></a>
                <a href="#"><span className="question-help">Need Help?</span></a>
            </p>
            <div className="d-flex">
                <ul className="question-nums-list">
                    <li><a className="done" href="#">1</a></li>
                    <li><a className="done" href="#">2</a></li>
                    <li><a className="done" href="#">3</a></li>
                    <li><a className="done" href="#">4</a></li>
                    <li><a className="done" href="#">5</a></li>
                    <li><a className="done" href="#">6</a></li>
                    <li><a className="done" href="#">7</a></li>
                    <li><a className="done" href="#">8</a></li>
                    <li><a className="done" href="#">9</a></li>
                    <li><a className="done" href="#">10</a></li>
                    <li><a className="active" href="#">11</a></li>
                    <li><a href="#">12</a></li>
                    <li><a href="#">13</a></li>
                    <li><a href="#">14</a></li>
                    <li><a href="#">15</a></li>
                    <li><a href="#">16</a></li>
                    <li><a href="#">17</a></li>
                    <li><a href="#">18</a></li>
                    <li><a href="#">19</a></li>
                    <li><a href="#">20</a></li>
                </ul>
            </div>
        </section>
    )
}

export default QuestionsNavigation;
