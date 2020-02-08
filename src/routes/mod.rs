use yew::prelude::*;
use yew_router::{route::Route, service::RouteService, Switch};

use crate::screens::{contact::Contact, dashboard::Dashboard};

#[derive(Switch, Clone, Debug)]
pub enum Routes {
    #[to = "/contact"]
    ContactRoute,
    #[to = "/"]
    DashboardRoute,
}

pub struct Navigation {
    route_service: RouteService<()>,
    route: Route<()>,
    link: ComponentLink<Self>,
}

pub enum Msg {
    ChangeRoute(Routes),
    RouteChange(Route<()>),
}

impl Navigation {
    fn change_route(&self, route: Routes) -> Callback<ClickEvent> {
        self.link.callback(move |_| {
            let route = route.clone();
            Msg::ChangeRoute(route)
        })
    }
}

impl Component for Navigation {
    type Message = Msg;
    type Properties = ();

    fn create(_props: Self::Properties, link: ComponentLink<Self>) -> Self {
        let mut route_service: RouteService<()> = RouteService::new();
        let raw_route = route_service.get_route();
        let route = Route::from(raw_route);

        let callback = link.callback(Msg::RouteChange);
        route_service.register_callback(callback);

        Navigation {
            route_service,
            route,
            link,
        }
    }

    fn update(&mut self, msg: <Self as yew::html::Component>::Message) -> ShouldRender {
        match msg {
            Msg::ChangeRoute(route) => {
                let route_string = match route {
                    Routes::ContactRoute => format!("/contact"),
                    Routes::DashboardRoute => format!("/"),
                };

                self.route_service.set_route(&route_string, ());
                self.route = Route {
                    route: route_string,
                    state: (),
                };
            }
            Msg::RouteChange(route) => self.route = route,
        }

        true
    }

    fn view(&self) -> Html {
        html! {
            <div class="container">
                <div class="header">
                    <p class="name">{"Ahmad, Shafiq"}</p>
                    <nav class="menu">
                        <div onclick=&self.change_route(Routes::DashboardRoute) > {"Root"} </div>
                        <div onclick=&self.change_route(Routes::ContactRoute) > {"Contact"} </div>
                    </nav>
                </div>
                <div class="content">
                    {
                        match Routes::switch(self.route.clone()) {
                            Some(Routes::DashboardRoute) => html!{<Dashboard />},
                            Some(Routes::ContactRoute) => html!{<Contact />},
                            None => html!{ <div>{"Route Not Found! 404"}</div> }
                        }
                    }
                </div>
            </div>
        }
    }
}
