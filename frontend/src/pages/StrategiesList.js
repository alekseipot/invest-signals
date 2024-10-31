import React, { useEffect, useState } from 'react';
import { Button, ButtonGroup, Container, Table } from 'reactstrap';
import AppNavbar from '../components/AppNavbar';
import { Link } from 'react-router-dom';

const StrategyList = () => {

    const [strategies, setStrategies] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);

        fetch('api/public/strategies')
            .then(response => response.json())
            .then(data => {
                setStrategies(data);
                setLoading(false);
            })
    }, []);

    const remove = async (id) => {
        await fetch(`/api/group/${id}`, {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }).then(() => {
            let updatedStrategies = [...strategies].filter(i => i.id !== id);
            setStrategies(updatedStrategies);
        });
    }

    if (loading) {
        return <p>Loading...</p>;
    }

    const strategyList = strategies.map(strategy => {
        const address = `${strategy.address || ''} ${strategy.city || ''} ${strategy.stateOrProvince || ''}`;
        return <tr key={strategy.id}>
            <td style={{whiteSpace: 'nowrap'}}>{strategy.name}</td>
            <td>{address}</td>
            <td>{strategy.events.map(event => {
                return <div key={event.id}>{new Intl.DateTimeFormat('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: '2-digit'
                }).format(new Date(event.date))}: {event.title}</div>
            })}</td>
            <td>
                <ButtonGroup>
                    <Button size="sm" color="primary" tag={Link} to={"/strategies/" + strategy.id}>Edit</Button>
                    <Button size="sm" color="danger" onClick={() => remove(strategy.id)}>Delete</Button>
                </ButtonGroup>
            </td>
        </tr>
    });

    return (
        <div>
            <AppNavbar/>
            <Container fluid>
                <div className="float-end">
                    <Button color="success" tag={Link} to="/strategies/new">Add strategy</Button>
                </div>
                <h3>My Strategies List</h3>
                <Table className="mt-4">
                    <thead>
                    <tr>
                        <th width="20%">Name</th>
                        <th>Events</th>
                        <th width="10%">Actions</th>
                    </tr>
                    </thead>
                    <tbody>
                    {strategyList}
                    </tbody>
                </Table>
            </Container>
        </div>
    );
};

export default StrategyList;