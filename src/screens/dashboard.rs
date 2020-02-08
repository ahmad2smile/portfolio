use yew::prelude::*;

pub struct Dashboard {}

impl Component for Dashboard {
    type Message = ();
    type Properties = ();

    fn create(_props: Self::Properties, _link: ComponentLink<Self>) -> Self {
        Dashboard {}
    }

    fn update(&mut self, _: <Self as yew::html::Component>::Message) -> bool {
        unimplemented!()
    }

    fn view(&self) -> Html {
        html! {
            <div class="dashboard">
                <div class="qoute">{"\"Cogito Ergo Sum\""}</div>
                <div class="credit">{"Some guy..."}</div>
            </div>
        }
    }
}
