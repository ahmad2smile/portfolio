#![recursion_limit = "256"]

use yew::{html, Component, ComponentLink, Html};

pub mod screens;

mod routes;
use routes::Navigation;

struct App {}

impl Component for App {
    type Message = ();
    type Properties = ();

    fn create(_: Self::Properties, _link: ComponentLink<Self>) -> Self {
        App {}
    }

    fn update(&mut self, _msg: Self::Message) -> bool {
        unimplemented!()
    }

    fn view(&self) -> Html {
        html! {
            <Navigation />
        }
    }
}

fn main() {
    yew::start_app::<Navigation>();
}
