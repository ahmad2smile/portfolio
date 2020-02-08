use yew::prelude::*;

pub struct Contact {}

impl Component for Contact {
    type Message = ();
    type Properties = ();

    fn create(_props: Self::Properties, _link: ComponentLink<Self>) -> Self {
        Contact {}
    }

    fn update(&mut self, _: <Self as yew::html::Component>::Message) -> bool {
        unimplemented!()
    }

    fn view(&self) -> Html {
        html! {
            <>
                <div class="qoute">{"Contact Me!"}</div>
            </>
        }
    }
}
