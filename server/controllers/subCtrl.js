module.exports = {
    getSubscriptionPlans: (req, res) => {
        const db = req.app.get('db');

        db.subscriptions.get_subscription_plans()
        .then(plans => res.status(200).send(plans))
        .catch(err => res.status(500).send(err));
    }
}