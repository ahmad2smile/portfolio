use yew::prelude::*;
use yew_router::{route::Route, service::RouteService, Switch};

use crate::screens::{
    blog::blog_components::blog_1::Blog1, blog::blog_components::blog_2::Blog2, blog::Blog,
    contact::Contact, dashboard::Dashboard,
};

#[derive(Switch, Clone, Debug)]
pub enum Routes {
    #[to = "/#xamarin-why-and-why-not"]
    Blog1Route,
    #[to = "/#cat-dead-or-not"]
    Blog2Route,
    #[to = "/#blog"]
    BlogRoute,
    #[to = "/#contact"]
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
                    Routes::Blog1Route => format!("/#xamarin-why-and-why-not"),
                    Routes::Blog2Route => format!("/#cat-dead-or-not"),
                    Routes::BlogRoute => format!("/#blog"),
                    Routes::ContactRoute => format!("/#contact"),
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
                <nav class="nav-container">
                    <p class="header">{"Ahmad, Shafiq"}</p>
                    <ul class="nav flex-column">
                        <li class="nav-item px-3">
                            <a class="nav-link active" onclick=&self.change_route(Routes::DashboardRoute)>
                                {"Root"}
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" onclick=&self.change_route(Routes::BlogRoute) >
                                {"Blog"}
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" onclick=&self.change_route(Routes::ContactRoute) >
                                {"Contact"}
                            </a>
                        </li>
                        <li class="nav-item">
                            <a target="_blank" href="https://github.com/ahmad2smile/" class="nav-link">
                                {"GitHub"}
                            </a>
                        </li>
                    </ul>
                </nav>
                <div class="content">
                    {
                        match Routes::switch(self.route.clone()) {
                            Some(Routes::Blog1Route) => html!{<Blog1 />},
                            Some(Routes::Blog2Route) => html!{<Blog2 />},
                            Some(Routes::BlogRoute) => html!{<Blog />},
                            Some(Routes::ContactRoute) => html!{<Contact />},
                            Some(Routes::DashboardRoute) => html!{<Dashboard />},
                            None => html!{ <div>{"Route Not Found! 404"}</div> }
                        }
                    }
                </div>
            </div>
        }
    }
}
