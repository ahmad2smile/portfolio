use yew::prelude::*;

pub struct BlogList {}

impl Component for BlogList {
    type Message = ();
    type Properties = ();

    fn create(_props: Self::Properties, _link: ComponentLink<Self>) -> Self {
        BlogList {}
    }

    fn update(&mut self, _: <Self as yew::html::Component>::Message) -> bool {
        unimplemented!()
    }

    fn view(&self) -> Html {
        html! {
            <div class="blog-list">
                <div class="blog-item">
                    <h4>{"Xamarin, Why & Why Not"}</h4>
                    <p>{"Some light on Xamarin through the lense of frontend perspective in the space of React Native and Flutter..."}</p>
                    <a href="#xamarin-why-and-why-not" class="link">{"Read more"}</a>
                </div>
            </div>
        }
    }
}
