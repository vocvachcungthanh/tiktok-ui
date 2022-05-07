import React, { Fragment } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { DefaultLayout } from '~/components/Layouts';
import { publicRouters } from '~/routers';

function App() {
    const renderRouter = (data) => {
        return data.map((item, index) => {
            const Pages = item.component;

            let Layout = DefaultLayout;

            if (item.layout) {
                Layout = item.layout;
            } else if (item.layout === null) {
                Layout = Fragment;
            }

            return (
                <Route
                    key={index}
                    path={item.path}
                    element={
                        <Layout>
                            <Pages />
                        </Layout>
                    }
                />
            );
        });
    };
    return (
        <Router>
            <div className="App">
                <Routes>{renderRouter(publicRouters)}</Routes>
            </div>
        </Router>
    );
}

export default App;
