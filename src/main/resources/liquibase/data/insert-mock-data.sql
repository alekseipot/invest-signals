INSERT INTO strategy (id, name, description, return_rate, risk, return_to_risk, price, performance)
VALUES
    (1, 'Stock Market Strategy 1', 'Best strategy for high-return stock investments.', '+13.93% p.a.', 'Moderate', 'High', '€49.99/month', '+13.93% p.a.'),
    (2, 'Real Estate Strategy 1', 'Maximize long-term returns...', '+9.85% p.a.', 'Low', 'Medium', '€79.99/month', '+9.85% p.a.');


INSERT INTO characteristic (id, title, strategy_id) VALUES
                                                        (1, 'Basic Data', 1),
                                                        (2, 'Capital', 1),
                                                        (3, 'Return', 1),
                                                        (4, 'Risk', 1),
                                                        (5, 'Return to Risk', 1),
                                                        (6, 'Basic Data', 2),
                                                        (7, 'Capital', 2),
                                                        (8, 'Return', 2),
                                                        (9, 'Risk', 2),
                                                        (10, 'Return to Risk', 2);

INSERT INTO characteristic_properties (characteristic_id, property_name, property_value) VALUES
                                                                                             (1, 'Investment Horizon', '3 years'),
                                                                                             (1, 'Strategic Approach', 'Multi-strategy'),
                                                                                             (1, 'Trading Directions', 'LONG + SHORT'),
                                                                                             (1, 'Regions', 'Worldwide'),
                                                                                             (1, 'Asset Classes', 'Shares, Money Market, Raw Materials'),
                                                                                             (1, 'Minimum Capital', '136,000 €'),
                                                                                             (1, 'Max. Number of Positions', '34'),
                                                                                             (1, 'Transactions', '3,084 (124.5 pa)'),
                                                                                             (1, 'Number of Trading Days', '75.2 pa'),
                                                                                             (1, 'Benchmark', 'MSCI World Net'),
                                                                                             (2, 'Start (12/1999)', '100,000 €'),
                                                                                             (2, 'End of 09/2024', '2,528,150 €'),
                                                                                             (3, 'Total Return', '2,428.15%'),
                                                                                             (3, 'Yield p.a. (Geo.)', '13.93%'),
                                                                                             (3, 'Return in 2023', '7.63%'),
                                                                                             (3, 'Yield 2024 YTD', '10.86%'),
                                                                                             (4, 'Maximum Decline', '-17.96%'),
                                                                                             (4, 'Medium Decline', '-2.88%'),
                                                                                             (4, 'Volatility p.a.', '9.14%'),
                                                                                             (4, 'Longest Losing Period', '1.80 years'),
                                                                                             (5, 'Yield / Max. Decline', '0.78'),
                                                                                             (5, 'Yield / Average Decline', '4.84'),
                                                                                             (5, 'Return / Volatility p.a.', '1.52');

INSERT INTO characteristic_properties (characteristic_id, property_name, property_value) VALUES
                                                                                             (6, 'Investment Horizon', '10 years'),
                                                                                             (6, 'Strategic Approach', 'Real Estate Focus'),
                                                                                             (6, 'Regions', 'Europe'),
                                                                                             (6, 'Asset Classes', 'Real Estate'),
                                                                                             (6, 'Minimum Capital', '150,000 €'),
                                                                                             (6, 'Max. Number of Positions', '10'),
                                                                                             (6, 'Transactions', '500'),
                                                                                             (6, 'Benchmark', 'Real Estate Index'),
                                                                                             (6, 'Outperformance', '10% p.a.'),
                                                                                             (7, 'Start', '150,000 €'),
                                                                                             (7, 'End', '3,150,000 €'),
                                                                                             (8, 'Total Return', '1,000%'),
                                                                                             (8, 'Yield p.a. (Geo.)', '9.85%'),
                                                                                             (9, 'Maximum Decline', '-10%'),
                                                                                             (9, 'Volatility p.a.', '5%'),
                                                                                             (10, 'Return / Volatility p.a.', '2.0');

INSERT INTO rating (id, label, rating, strategy_id) VALUES
                                                          (1, 'Chance', 4.5, 1),
                                                          (2, 'Risk', 3.2, 1),
                                                          (3, 'Comfort', 5.0, 1);

INSERT INTO rating (id, label, rating, strategy_id) VALUES
                                                          (4, 'Risk', 2.2, 2),
                                                          (5, 'Comfort', 4.6, 2);

INSERT INTO users (email, password, creation_date) VALUES
    ('user@example.com', '$2a$10$wzjL/Nz9OH9dZP9/Zt1Ou.hYb3I6nScf1AFOxPqVw8/e/eX6djz6e', CURRENT_TIMESTAMP);
