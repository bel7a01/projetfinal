import FaqStyle from './Faq.module.css'
const Faq = () => {
    return (
        <div className={FaqStyle.container1} id='faq'>
            <div className={FaqStyle.left}>
                <p className={FaqStyle.p2}>Frequently Asked Question</p>
                <p className={FaqStyle.p3}>Find answers to common question about the 2024 Champions league Final,tickets and accommondations.</p>
            </div>
            <div className={FaqStyle.right}>
                <hr className={FaqStyle.hr} />
                <p className={FaqStyle.p}> What are the dates ?</p>
                <p className={FaqStyle.p1}>The 2024 Champions League Final will take place on date </p>
                <hr className={FaqStyle.hr} />
                <p className={FaqStyle.p}> How can i buy tickets ?</p>
                <p className={FaqStyle.p1}> Tickets for the 2024 champions League Final can be purchased through our official website . </p>
                <hr className={FaqStyle.hr} />
                <p className={FaqStyle.p}> Where is the venue ?</p>
                <p className={FaqStyle.p1}>The venue for the 2024 Champions League Final is at Wembley Stadium London. </p>
                <hr className={FaqStyle.hr} />
                <p className={FaqStyle.p}> What are the accommodations ?</p>
                <p className={FaqStyle.p1}> Children are welcome to attend the 2024 Champions League Final but please note that tickets may have age restrictions  </p>
            </div>
        </div>






    );
}

export default Faq;