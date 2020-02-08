use yew::{html, Component, ComponentLink, Html};

mod screens;
use screens::dashboard::Dashboard;

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
            <Dashboard />
        }
    }
}

fn main() {
    yew::start_app::<App>();
}
