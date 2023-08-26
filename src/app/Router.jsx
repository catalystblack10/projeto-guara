import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomePage } from "../pages/Home";
import { EventDetails } from "../pages/EventDetails";
import { NotFound } from "../pages/NotFound";
import { DefaultLayout } from "../layouts/defaultLayout";

export function Router() {
    /* path="*" */

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<DefaultLayout />}>
                    <Route path="*" element={<NotFound />} />
                    <Route path="/" element={<HomePage />} />
                    <Route path="/eventos/:id" element={<EventDetails />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}