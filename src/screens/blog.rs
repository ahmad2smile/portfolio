use yew::prelude::*;

pub struct Blog {}

impl Component for Blog {
    type Message = ();
    type Properties = ();

    fn create(_props: Self::Properties, _link: ComponentLink<Self>) -> Self {
        Blog {}
    }

    fn update(&mut self, _: <Self as yew::html::Component>::Message) -> bool {
        unimplemented!()
    }

    fn view(&self) -> Html {
        html! {
            <>
                <div class="qoute">{"Blog Me!"}</div>
            </>
        }
    }
}
