import { NextFunction, Request, Response, Router } from 'express';
import { CreateChart } from 'price-chart-core';

const router: Router = Router();

router.get('/', (req: Request, res: Response, next: NextFunction) => {

    const image = CreateChart();

    res.writeHead(200, {
        "Content-Type": "image/jpg"
    });

    res.end(image);
});

export const PriceChartRoutes: Router = router;