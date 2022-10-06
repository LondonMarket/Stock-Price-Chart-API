import { NextFunction, Request, Response, Router } from 'express';

const router: Router = Router();

router.get('/', (req: Request, res: Response, next: NextFunction) => {
    return res.status(200).json('Price Chart')
});

export const PriceChartRoutes: Router = router;