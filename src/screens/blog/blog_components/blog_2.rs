use yew::prelude::*;

pub struct Blog2 {}

impl Component for Blog2 {
    type Message = ();
    type Properties = ();

    fn create(_props: Self::Properties, _link: ComponentLink<Self>) -> Self {
        Blog2 {}
    }

    fn update(&mut self, _msg: Self::Message) -> bool {
        unimplemented!()
    }

    fn view(&self) -> Html {
        html! {
            <div>
                <h1>{"Schrödinger's Cat and decision making on Diminishes Returns"}</h1>
                <b>{"Be warned! It's a question. No answer Yet."}</b>
                <p>{"So Schrödinger's Cat is in the box with the poison to be triggered at some random timer (1 > t > infinity) plus by a sensitive lever. If cat touches the lever poison would be released."}</p>
                <p>{"So, essentially more time cat spends in the box more likely the cat is dead."}</p>
                <p>{"Now you have to find out if the cat is alive. If it is alive it would be a rewarding scenario."}</p>
                <p>
                    <strong>{"Scenarios 1:"}</strong>
                </p>
                <p>{"You open the box to see if cat is alive or dead. This choice representing you deciding towards impatience, taking things in your control and satisfying your Curiosity."}</p>
                <p>{"Options:"}</p>
                <ol>
                    <li>
                        {"Poison was released "}
                        <strong>{"Cat is Dead"}</strong>
                    </li>
                    <li>
                        {"You opening the box freaks out the cat, it touches the lever, poison is released and "}
                        <strong>{"Cat is Dead"}</strong>
                    </li>
                    <li>
                        {"Cat doesn't trigger the lever and "}
                        <strong>{"Cat is Alive"}</strong>
                    </li>
                </ol>
                <p>
                    <strong>{"Scenarios 2:"}</strong>
                </p>
                <p>{"You wait for the cat to jump out of the box itself. Decision would reflect Taoist attitude. Submitting to things rather than trying to control them."}</p>
                <p>{"Options:"}</p>
                <ol>
                    <li>
                        {"Cat jumps out immediately and "}
                        <strong>{"Cat is Alive"}</strong>
                    </li>
                    <li>
                        {"Cat jumps out after some time "}
                        <strong>{"Cat is Alive"}</strong>
                        {" but that time dimishes your reward (more time = less reward)"}
                    </li>
                    <li>
                        {"Cat doesn't jump out and after few days you are fairly certainly that the  "}
                        <strong>{"Cat is Dead"}</strong>
                        {" either of poison or just hunger/thirst."}
                    </li>
                </ol>
                <p>{"Given that pursuing as much reward as possible and letting an animal (cat) die is not immoral actions."}</p>
                <p>{"In trying to make the best decision possible as to a better way of living in this constrained context would any of the given actions above (or unmentioned actions which would lead to higher reward) be morally or empirically be superior?"}</p>
                <p>
                    <strong>{"Note"}</strong>
                    {": I make result of positive outcome a reward but which actually is synonymous with happiness in life (better way of living) so to not complicate the question with moral relativism."}
                </p>
            </div>
        }
    }
}
